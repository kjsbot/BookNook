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