import React from 'react';
import { Link } from 'react-router-dom';

function Form({ handleSubmit, placeholder, to, isCorrectEmail, type, setEmail }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Link to={isCorrectEmail ? to : ''}>
                <input onClick={() => handleSubmit()} type="submit" value="Dalej" />
            </Link>
        </form >
    )
}

export default Form;