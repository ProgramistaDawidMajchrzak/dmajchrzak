import React, { useState, useEffect, useContext } from 'react';
import '../App.css';
import axios from 'axios';
import Form from './Form';
import UserContext from './UserContext';

function WelcomePage() {

    const { validUser, setValidUser } = useContext(UserContext);

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios.get('users.json')
            .then(res => {
                setUsers(res.data.users)
                console.log(res.data.users)
            })
            .catch(err => console.log(err))
    }, []);

    const [isCorrectEmail, setIsCorrectEmail] = useState(true);
    const [invalidEmail, setInvalidEmail] = useState(true);

    const handleSubmit = () => {
        console.log('siema');
        //check valid email
        const user = users.filter(user => user.email == email)
        setValidUser(user);
        console.log(user)
        // setInvalidEmail(true);
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
            />
            {/* <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Email'
                    onChange={setEmail(e.target.value)}
                />
                <Link to={to}>
                    <input type="submit" value="Dalej" />
                </Link>
            </form > */}
            {invalidEmail &&
                <h5 className='invalid_data'>Podano niepoprawny email.</h5>
            }
        </>
    )
}

export default WelcomePage;