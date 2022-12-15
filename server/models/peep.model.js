import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
    username: { type: String, required: true },
    realName: { type: String, required: true },
    content: { type: String, required: true },
    dateCreated: { type: String, required: true }
});

const Peep = new mongoose.model("Peep", peepSchema);

export default Peep;