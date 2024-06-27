import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function signup(req, res) {
    try {
        // Get email & password
        const { email, password } = req.body;

        // Hash password
        const hashPassword = bcrypt.hashSync(password, 8);

        // Create user with data
        await User.create({ email, password: hashPassword });

        // Respond
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

async function login(req, res) {
    try {
        // Get email & password
        const { email, password } = req.body;

        // Find user with requested email
        const user = await User.findOne({ email: email });
        if (!user) return res.sendStatus(401);

        // Compare sent in password with user password hash
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) return res.sendStatus(401);

        // Create jwt token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign(
            { sub: user._id, exp: exp },
            process.env.SECRET_KEY
        );

        // Set te cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "productions",
        });

        // Send token
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

function logout(req, res) {
    try {
        res.clearCookie("Authorization");
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

function checkAuth(req, res) {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }
}

export default { signup, login, logout, checkAuth };
