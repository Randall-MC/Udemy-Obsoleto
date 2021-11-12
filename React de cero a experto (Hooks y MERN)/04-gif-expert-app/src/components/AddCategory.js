import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }
    
    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( categories => [ inputValue , ...categories]);
            setInputValue('');
        }
    }

    return (
        <form className="addCategory" onSubmit = { handleSubmit }>
            <input
                className="addCategory__input"
                type = "text"
                onChange = { handleInputChange }
                placeholder = 'Buscar'
                value = { inputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}