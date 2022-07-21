import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    meetLink: {
        type: String
    },
    teamName: {
        type: String,
        required: true
    },
    registerLink: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    poster: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model("Event", EventSchema);