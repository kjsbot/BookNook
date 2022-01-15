import React from "react";
import '../styles/Bookshelf.css';
import '../images/search.png';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

// https://www.youtube.com/watch?v=1eO_hNYzaSc <- adding to shelf

const Bookshelf = () => {
    return (
        <div className="shelf">

            <div className="top">
                <h1 className="book-h1">My Books</h1>

                <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">All</a>
                        <a href="#">Not Started</a>
                        <a href="#">Reading</a>
                        <a href="#">Completed</a>
                    </div>
                </div>
            </div>
            
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