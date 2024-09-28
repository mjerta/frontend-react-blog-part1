import React from 'react';
import {Link, useParams} from "react-router-dom";
import blogs from "../../constants/data.json"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import UserFeedBack from "../../components/userfeedback/UserFeedBack.jsx";
import "./Post.css"
import convertDate from "../../helpers/converDate.js";

function Post() {
  const {id} = useParams();
  const blog = blogs[id];

  return (
    <article className={"blog-post"}>
      <h1>{blog.title}</h1>
      <h4>{blog.subtitle}</h4>
      <p>Geschreven door {blog.author} op {convertDate(blog.created)}</p>
      <small>
        <FontAwesomeIcon
          className={"clock-svg"}
          icon={faClock}
        />
        {blog.readTime} minuten lezen
      </small>
      <p>{blog.content}</p>
      <UserFeedBack
        comments={blog.comments}
        shares={blog.shares}
      />
      <Link to={"/overview"}>
        <p className="backlink">
          <FontAwesomeIcon
            icon={faChevronLeft}
          />
          Terug naar de overzichtpagina
        </p>
      </Link>
    </article>)
}

export default Post;