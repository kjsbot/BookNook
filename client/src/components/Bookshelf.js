import React from "react";
import '../styles/Bookshelf.css';
import '../images/search.png';
import Header from './header';
import { Link } from "react-router-dom";

const Bookshelf = () => {
    return (
        <div className="shelf">
            <Header />
            My Books
            <hr />

            <button>
                <Link to="/search">Search</Link>
            </button>
        </div>
    )
}

export default Bookshelf