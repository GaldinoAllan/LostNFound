import React from 'react';

const Input = ({ label, type, name, inputRef, defaultValue }) => (
  <div className="form-group col">
    {label &&
      <label
        className="font-weight-bold">
        {label}
      </label>
    }
    {defaultValue ?
      (
        <input
          type={type}
          defaultValue={defaultValue}
          ref={inputRef}
          className="form-control"
        />
      ) : (
        <input
          type={type}
          name={name}
          ref={inputRef}
          className="form-control"
          placeholder={label}
        />)
    }

  </div>
);

export default Input;