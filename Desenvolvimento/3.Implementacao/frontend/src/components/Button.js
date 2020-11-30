import React from 'react';

const Button = ({ className, onClick, type, text }) => (
  <button
    className={className}
    type={type}
    onClick={onClick}>
    {text}
  </button>
);

export default Button;