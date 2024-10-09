import React from 'react';

function ErrorOuput({error, classname}) {
  return (
    <p className={classname}>
      {error && error.message}
    </p>
  )
}

export default ErrorOuput;