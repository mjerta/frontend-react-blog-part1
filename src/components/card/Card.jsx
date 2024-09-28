import React from 'react';

function Card({comments, title, shares, author, className}) {
  return (
    <article className={className}>
      <header>
        <h2>{title}</h2>
        <p>(by {author})</p>
      </header>
      <footer>
        <p>{comments} reacties</p><span>-</span> <p>{shares} keer gedeeld</p>
      </footer>
    </article>
  )
}

export default Card;