import React, { useContext } from 'react';
import WelcomePage from './WelcomePage';
import PasswordPage from './PasswordPage';
import UserContext from './UserContext';

function LogIn() {
    const { validUser, setValidUser } = useContext(UserContext);
    return (
        <>
            {!validUser ? <WelcomePage /> : <PasswordPage />}
        </>
    )
}

export default LogIn;