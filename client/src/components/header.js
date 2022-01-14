import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';
import '../images/books.png';

const Header = () => {
    return (
        <header className="header">
            <div className="inner-header">
                <div className="brand">
                    <img className="logo" src="books.png" />
                    <Link to="/">BookNook</Link>
                </div>
            </div>
        </header>
    )
}

export default Header