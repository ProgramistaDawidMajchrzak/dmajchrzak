import React from 'react';
import '../App.css';

function TicketConfig() {
    return (
        <>
            <h1>Kto z Tobą jedzie?</h1>
            <h3>Wybierz do 6 osób</h3>
            <ul>
                <li>
                    <h3>Osoby dorosłe</h3>
                    <div className="counter">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </li>
                <li>
                    <h3>Dzieci od 5 do 12 lat</h3>
                    <div className="counter">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </li>
                <li>
                    <h3>Dzieci do 4 lat</h3>
                    <div className="counter">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </li>
            </ul>
            <h2>Cena: 0,00 zł</h2>
        </>
    )
}

export default TicketConfig;