import React from "react";
import '../styles/SearchPage.css';

const SearchPage = () => {
    return (
        <form className="search-bar" autoComplete="off">
            <input
                className="input"
                type="text"
                placeholder="Search by book name..."
            />
        </form>
    )
}

export default SearchPage