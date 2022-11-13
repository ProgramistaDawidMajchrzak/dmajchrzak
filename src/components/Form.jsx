import React from 'react';
import { Link } from 'react-router-dom';

function Form({ handleSubmit, placeholder, to, isCorrectEmail, type, setEmail, setInvalidEmail }) {
    return (
        // <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => {
                    setEmail(e.target.value)
                    setInvalidEmail(false)
                }
                }
            />
            {/* <Link to={isCorrectEmail ? to : null}> */}
            <input type='submit' value="Dalej" />
            {/* </Link> */}
        </form >
    )
}

export default Form;