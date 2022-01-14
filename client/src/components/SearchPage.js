import React from "react";
import '../styles/SearchPage.css';
import Header from './header';
import Search from './Search';

const SearchPage = () => {
    return (
        <div className="search-pg">
            <Header />
            <div className="search-stuff">
                <h1>Boogle</h1>
                <Search></Search>

                search results go here

                <button className="more-btn">More!</button>
            </div>
        </div>
    )
}

export default SearchPage