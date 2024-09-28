import React from 'react';
import ErrorOuput from "../erroroutput/ErrorOuput.jsx";

function TextArea({
                    name,
                    labelText,
                    id,
                    register,
                    errors,
                    requiredNeeded,
                    minLength,
                    maxLength,
                    rows,
                    errorMessage
                  }) {
  return (
    <>
      <label htmlFor={id}>
        <span>{labelText}</span>
      </label>
      <textarea
        id={id}
        {...register(name, {
          required: {
            value: requiredNeeded,
            message: errorMessage,
          },

          minLength: {
            value: minLength ? minLength : 0,
            message: `Dient minimaal ${minLength} karakters lang zijn`
          },
          maxLength: maxLength ? {
            value: maxLength,
            message: `Mag maximaal ${maxLength} karakters lang zijn`
          } : null
        })}
        rows={rows}
      >

    </textarea>
      <ErrorOuput
        classname={"error-message"}
        error={errors[name]}
      />
    </>
  )
}

export default TextArea;