// ---- ENV VARIABLES
import "dotenv/config";

// ---- DEPENDENCIES
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDb from "./config/ConnectDb.js";
import notesController from "./controllers/notesController.js";
import userController from "./controllers/userController.js";
import requireAuth from "./middleware/requireAuth.js";

//Create express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

// Connect to DB
const PORT = process.env.PORT || 5000;
connectToDb();

// ---- ROUTING -----
// USERS
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
app.get("/check-auth", userController.checkAuth);

// NOTES
app.post("/notes", notesController.createNote);
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", requireAuth, notesController.deleteNote);

// Start server
app.listen(PORT, () => {
    console.log(`Congrats! Listening on port ${PORT}`);
});
