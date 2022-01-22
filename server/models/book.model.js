import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Title",
    },
    authors: {
        type: [String],
    },
    cover: {
        type: Image,
        //default
    },
    status: {
        type: String, /// for now
        default: "Start Reading",
    }
});

const bookItem = mongoose.model("bookItem", bookSchema);

export default bookItem;