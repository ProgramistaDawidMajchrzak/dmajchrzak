import React, { useState, useContext } from 'react';
import '../App.css';
import Form from './Form';
import UserContext from './UserContext';

function PasswordPage() {

    const { validUser } = useContext(UserContext);

    const handleSubmit = () => {
        //check valid email
        console.log('siema');
    }
    return (
        <>
            <h1>Miło nam Cię poznać, {validUser.name}!</h1>
            <h3>Gotów na dzień pełen wrażeń? </h3>
            <h5>Podaj hasło, które jest w treści wiadomości mailowej informującej o wygranej.</h5>
            <Form
                handleSubmit={handleSubmit}
                placeholder="Hasło"
                to='/ticket_config'
                type='password'
            />

            <h5 className='invalid_data'>Podano niepoprawne hasło.</h5>

        </>
    )
}

export default PasswordPage;