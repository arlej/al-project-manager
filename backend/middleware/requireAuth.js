import jwt from "jsonwebtoken";
import User from "../models/User.js";

async function requireAuth(req, res, next) {
    try {
        // Read token
        const token = req.cookies.Authorization;
        // Decode token
        const decoded = jwt.verify(token, process.env.SERCRET_KEY);

        // Check expiration
        if (Date.now() > decoded.exp) return res.sendStatus(401);

        // Find user using decoded sub
        const user = await User.findById(decoded.sub);
        if (!user) return res.sendStatus(401);
        // Attach user tot request
        req.user = user;
        // Next
        next();
    } catch (err) {
        return res.sendStatus(401);
    }
}
export default requireAuth;
