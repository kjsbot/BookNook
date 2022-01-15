import React from "react";
import '../styles/Card.css';

const ResultCard = ({ book }) => {
    return (
        <div className="res-card">
            <div>Cover</div>
            <h2 className="title">{book.title}</h2>
            <div className="author">{book.authors}</div>
            <button className="add-btn">Add</button>
        </div>
    )
}

export default ResultCard