import React from 'react';

function Form({ handleSubmit, placeholder, type, value, onChange }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <input type='submit' value="Dalej" />
        </form >
    )
}

export default Form;