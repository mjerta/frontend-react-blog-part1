import React from 'react';

function Button({type, buttonText, className}) {
  return (
      <button className={className} type={type}>{buttonText}</button>
  )
}

export default Button;