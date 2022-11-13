import React, { useState, useEffect, useContext } from 'react';
import '../App.css';
import axios from 'axios';
import Form from './Form';
import UserContext from './UserContext';

function WelcomePage() {

    const { validUser, setValidUser } = useContext(UserContext);
    let userTest = {};

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');

    const [isCorrectEmail, setIsCorrectEmail] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    useEffect(() => {
        axios.get('users.json')
            .then(res => {
                setUsers(res.data.users)
                console.log(res.data.users)
            })
            .catch(err => console.log(err))
    }, []);


    function handleSubmit() {

        const authUserEmail = users.find(user => user.email == email)

        if (authUserEmail) {
            setValidUser(authUserEmail)
            setIsCorrectEmail(true)
        } else {
            setInvalidEmail(true)
        }
        console.log(validUser);
    }

    return (
        <>
            <h1>Zrealizuj swoją nagrodę!</h1>
            <h3>Gotowi na dzień pełen wrażeń? </h3>
            <h5>Nagroda obejmuje przejazd maksymalnie 6 osób klasycznymi Porsche 911 paradzie samochodów na festiwalu Classic Cars Poland.</h5>
            <Form

                handleSubmit={handleSubmit}
                placeholder="Email"
                to='/password'
                isCorrectEmail={isCorrectEmail}
                type='email'
                setEmail={setEmail}
                setInvalidEmail={setInvalidEmail}
            />
            {invalidEmail &&
                <h5 className='invalid_data'>Podano niepoprawny email.</h5>
            }
        </>
    )
}

export default WelcomePage;