import React from "react";
import '../styles/Bookshelf.css';
import '../images/search.png';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Bookshelf = () => {
    return (
        <div className="shelf">
            My Books
            <hr />

            <Link to="/search">
                <motion.button
                    className="search-btn"
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.99 }}>
                    <img src="search.png" />
                </motion.button>
            </Link>
        </div>
    )
}

export default Bookshelf