import React, { useState, useEffect } from "react";
import '../styles/SearchPage.css';
import Search from './Search';
import { motion } from 'framer-motion';
import axios from 'axios';
import ResultCard from "./ResultCard";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!query) return setResults([])

        // async and await functions javascript
        //const fetchBooks = () => {
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=8&key=AIzaSyCUwri9Ny5DK26fTtiLuQBlUK5ZUMWh2nY`
        ).then((res) => {
            setResults(res.data.items.map(book => {
                return {
                    //cover: book.volumeInfo.imageLinks.thumbnail,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                }
            }))
            //console.log(res.data.items[0].volumeInfo.title)
            //console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
            //console.log(res.data.items[0].volumeInfo.authors)
        })
        //}
    }, [query])

    // DON'T PRESS THE BUTTON!!
    const loadMore = async () => {
        const moreBooks = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=4&startIndex=${results.length}&key=AIzaSyCUwri9Ny5DK26fTtiLuQBlUK5ZUMWh2nY`
        )
        setResults((oldRes) => [...oldRes, ...moreBooks.data.items])
    }

    return (
        <div className="search-pg">
            <div className="search-stuff">
                <h1>Boogle</h1>

                <form className="search-bar" autoComplete="off">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search by book name..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </form>

                <div className="results-container">
                    {results.map((book, index) => (
                        <ResultCard book={book} key={index} />
                    ))}
                </div>


                <motion.button
                    className="more-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={loadMore}>
                    More
                </motion.button>
            </div>
        </div>
    )
}

export default SearchPage