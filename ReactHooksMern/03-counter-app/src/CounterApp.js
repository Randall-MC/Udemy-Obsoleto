import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( counter => counter +1 ); // Cuando no se conoce el valor del primer parámetro
    }

    const handleReset = () => setCounter( value );

    const handleSubtract = () => setCounter( counter - 1 );

    return (
        <div className = "container">
            <h1> Counter App </h1>
            <h2>{ counter }</h2>
            <button onClick = { handleSubtract }> - 1 </button>
            <button onClick = { handleReset }> Reset </button>
            <button onClick = { handleAdd }> + 1 </button>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;