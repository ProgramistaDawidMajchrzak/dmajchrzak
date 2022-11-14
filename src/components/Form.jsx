import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Form({ handleSubmit, placeholder, to, isCorrectEmail, type, setEmail, setInvalidEmail, value, onChange }) {
    // let ConditionalLink = isCorrectEmail ? Link : React.DOM.div;
    const { validUser, setValidUser } = useContext(UserContext);
    return (
        <form onSubmit={handleSubmit}>
            {/* <form> */}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {/* <Link to={to}> */}
            <input type='submit' value="Dalej" />
            {/* </Link> */}
        </form >
    )
}

export default Form;