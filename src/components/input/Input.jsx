import React from 'react';
import ErrorOuput from "../erroroutput/ErrorOuput.jsx";

function Input({labelText, id, register, name, requiredNeeded, errors, errorMessage}) {
  return (
    <>
      <label htmlFor={id}>
        <span>
          {labelText}
        </span>
        <input
          type="text"
          id={id}
          {...register(name, {
            required: {
              value: requiredNeeded,
              message: errorMessage,
            },
          })}
        />
      </label>
      <ErrorOuput
        classname={"error-message"}
        error={errors[name]}
      />
    </>
  )
}

export default Input;