import React, { useState } from 'react';
import '../App.css';

function TicketConfig() {
    const [overAll, setOverAll] = useState(0);
    const [adult, setAdult] = useState(0);
    const [middleKids, setMiddleKids] = useState(0);
    const [kids, setKids] = useState(0);

    const [cost, setCost] = useState(0);

    const normalCost = 80;
    const middleKidsCost = normalCost - normalCost / 2;
    const kidsCost = normalCost / 10;

    return (
        <>
            <h1>Kto z Tobą jedzie?</h1>
            <h3>Wybierz do 6 osób</h3>
            <ul>
                <li>
                    <h3>Osoby dorosłe</h3>
                    <div className="counter">
                        <button onClick={() => {
                            if (adult > 0) {
                                setAdult(adult - 1)
                                setOverAll(overAll - 1)
                                setCost(cost - normalCost)
                            }
                        }}
                        >-</button>
                        <p>{adult}</p>
                        <button onClick={() => {
                            if (overAll < 6) {
                                setAdult(adult + 1)
                                setOverAll(overAll + 1)
                                setCost(cost + normalCost)
                            }
                        }}
                        >+</button>
                    </div>
                </li>

                <li>
                    <h3>Dzieci od 5 do 12 lat</h3>
                    <div className="counter">
                        <button onClick={() => {
                            if (middleKids > 0) {
                                setMiddleKids(middleKids - 1)
                                setOverAll(overAll - 1)
                                setCost(cost - middleKidsCost)
                            }
                        }}
                        >-</button>
                        <p>{middleKids}</p>
                        <button onClick={() => {
                            if (overAll < 6) {
                                setMiddleKids(middleKids + 1)
                                setOverAll(overAll + 1)
                                setCost(cost + middleKidsCost)
                            }
                        }}
                        >+</button>
                    </div>
                </li>

                <li>
                    <h3>Dzieci do 4 lat</h3>
                    <div className="counter">
                        <button onClick={() => {
                            if (kids > 0) {
                                setKids(kids - 1)
                                setOverAll(overAll - 1)
                                setCost(cost - kidsCost)
                            }
                        }}
                        >-</button>
                        <p>{kids}</p>
                        <button onClick={() => {
                            if (overAll < 6) {
                                setKids(kids + 1)
                                setOverAll(overAll + 1)
                                setCost(cost + kidsCost)
                            }
                        }}
                        >+</button>
                    </div>
                </li>
            </ul>
            <h2>Cena: {cost},00 zł</h2>
        </>
    )
}

export default TicketConfig;