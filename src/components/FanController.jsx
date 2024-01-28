import React, { useState } from 'react';
import './app.css';

function Fan() {
    const [rotate, setRotate] = useState(false);

    const startRotate = () => {
        setRotate(true);
    };

    const stopRotate = () => {
        setRotate(false);
    };

    return (
        <div className="App">
            <img
                src="/fan1.png"
                style={{ width: 70, height: 70 }}
                alt="Fan"
                className={`fan ${rotate ? 'rotate' : ''}`}
            />
            <div>
                <button onClick={startRotate}>On</button>
                <button onClick={stopRotate}>Off</button>
            </div>
        </div>
    );
}

export default Fan;
