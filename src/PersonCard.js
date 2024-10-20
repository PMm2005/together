import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    const [currentAge, setCurrentAge] = useState(age);


    const increaseAge = () => {
    setCurrentAge(currentAge + 1);
    };

    return (
    <div style={cardStyle}>
        <h2>{firstName} {lastName}</h2>
        <p>Age: {currentAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={increaseAge}>Birthday Button for {firstName}!</button>
    </div>
    );
};

const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
    width: '200px',
    textAlign: 'center',
};

export default PersonCard;
