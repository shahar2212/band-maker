import React from 'react';

const Select = ({ name, label, arr, error, ...rest }) => {

    return (
        <div className="form-group mt-3">
            <label htmlFor={name} >{label}</label>
            <select {...rest} name={name} id={name} label="select" className="form-select" >
                <option hidden>none selected</option>
                {arr.map(el => (//map all of the elements in the instruments data
                    <option key={el}>{el}</option>
                ))}
            </select>
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
}

export default Select;