import mongoose from "mongoose";
import bookItem from "../models/book.model.js";

export const getBook = async (req, res) => {
    try {
        const bookItems = await bookItem.find();
        res.status(200).json(bookItems);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const newBook = async (req, res) => {
    const book = req.body; // allows you to access data in a string or JSON object from the client side
    const newBook = new bookItem(book); // creating a new book item with info in book passed into model

    try {
        await newBook.save();
        res.status(200).json(newBook);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateStatus = async (req, res) => {

}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Book not found");

    await bookItem.findByIdAndRemove(id);
    res.json({ message: "Book removed" });
}