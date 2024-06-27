import mongoose from "mongoose";

async function connectToDb() {
    await mongoose
        .connect(process.env.DATABASE_URL)
        .then(() => console.log("Connected to MongoDB!"))
        .catch(err => console.log(err));
}
export default connectToDb;
