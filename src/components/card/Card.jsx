import React from 'react';
import {Link, Navigate} from "react-router-dom";
import UserFeedBack from "../userfeedback/UserFeedBack.jsx";

function Card({comments, title, shares, author, className, id}) {
  return (
    <article onClick={() => <Navigate to={"/"}/>} className={className}>
      <header>
        <Link to={`/posts/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>(by {author})</p>
      </header>
      <UserFeedBack
        comments={comments}
        shares={shares}
      />
    </article>
  )
}

export default Card;