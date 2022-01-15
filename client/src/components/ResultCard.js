import React from "react";
import '../styles/Card.css';
import '../images/books.png';
import { motion } from 'framer-motion';

const ResultCard = ({ book }) => {

    const images = book.cover;

    return (
        <div className="res-card">

            <div className="img-div">
                <img className="cover-img" src={book.cover ? book.cover.thumbnail : "books.png"} />
            </div>

            <h2 className="title">{book.title}</h2>

            <div className="author">
                {book.authors}
            </div>

            <motion.button
                className="add-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Add
            </motion.button>

        </div>
    )
}

export default ResultCard