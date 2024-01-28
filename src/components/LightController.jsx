import React, { useState } from 'react';
// import './App.css';

function Light() {
    const [isOn, setIsOn] = useState(false);

    const turnOn = () => {
        setIsOn(true);
    };

    const turnOff = () => {
        setIsOn(false);
    };

    return (
        <div className="App1">
            <img
                src={isOn ? "light_on.png" : "/light_off.png"}
                style={{ width: 64, height: 90 }}
                alt="Light"
            />
            <div>
                <button onClick={turnOn}>On</button>
                <button onClick={turnOff}>Off</button>
            </div>
        </div>
    );
}

export default Light;
