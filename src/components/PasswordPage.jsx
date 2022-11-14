import React, { useState, useContext } from 'react';
import '../App.css';
import Form from './Form';
import UserContext from './UserContext';

function PasswordPage() {

    const { validUser } = useContext(UserContext);
    const { setToken } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validUser.password == password) {
            setToken(true)
        } else {
            setPassword('')
            setInvalidPassword(true)
        }
    }
    return (
        <>
            <h1>Miło nam Cię poznać, {validUser.first_name}!</h1>
            <h3>Gotów na dzień pełen wrażeń? </h3>
            <h5>Podaj hasło, które jest w treści wiadomości mailowej informującej o wygranej.</h5>
            <Form
                handleSubmit={handleSubmit}
                placeholder="Hasło"
                type='password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    setInvalidPassword(false)
                }}
            />
            <div className="info_wrapper">
                {invalidPassword &&
                    <h5 className='invalid_data'>Podano niepoprawne hasło.</h5>
                }
            </div>
        </>
    )
}

export default PasswordPage;