import mongoose from "mongoose";

// each post has to have these objects
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Title",
    },
    authors: {
        type: [String],
        default: ["N/A"],
    },
    cover: {
        type: String,
        default: ".../client/src/images/books.png",
    },
    status: {
        type: String,
        default: "Start Reading",
    }
});

const bookItem = mongoose.model("bookItem", bookSchema);

export default bookItem;