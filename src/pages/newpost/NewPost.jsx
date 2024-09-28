import React, {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import "./NewPost.css"
import Button from "../../components/button/Button.jsx";
import TextArea from "../../components/textarea/TextArea.jsx";
import Input from "../../components/input/Input.jsx";
import calculateTime from "../../helpers/calculateTime.js";
import {Navigate, useNavigate} from "react-router-dom";

function NewPost() {

  const navigate = useNavigate();
  const hasSubmitted = useRef(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm({mode: "onChange"})

  const [state, setState] = useState({
    title: '',
    subTitle: '',
    author: '',
    content: '',
    created: '',
    readTime: 0,
    comments: 0,
    shares: 0

  });

  function onSubmit(data) {
    hasSubmitted.current = true;
    const content = data.blogpost;
    const readTime = calculateTime(content);
    const newDate = new Date();
    setState({
      title: data.title,
      subTitle: data.subTitle,
      author: data.author,
      content: data.blogpost,
      created: newDate.toISOString(),
      readTime: readTime,
      comments: 0,
      shares: 0
    });
  }

  useEffect(() => {
    if (hasSubmitted.current) {
      console.log("Updated state:", state);
      navigate("/overview")
    }
  }, [state])

  return (
    <>
      <form autoComplete={"off"}
            onSubmit={handleSubmit((data) => onSubmit(data))}>
        <h1>Post toevoegen</h1>
        <Input
          name={"title"}
          id={"title"}
          errors={errors}
          requiredNeeded={true}
          register={register}
          labelText={"title"}
          errorMessage={"Dit veld is verplicht"}
        />
        <Input
          name={"subTitle"}
          id={"sub-title"}
          errors={errors}
          requiredNeeded={true}
          register={register}
          labelText={"subtitle"}
          errorMessage={"Dit veld is verplicht"}
        />
        <Input
          name={"author"}
          id={"author"}
          errors={errors}
          requiredNeeded={true}
          register={register}
          labelText={"naam en achternaam"}
          errorMessage={"Dit veld is verplicht"}
        />
        <TextArea
          labelText={"blogpost"}
          id={"blog-post"}
          name={"blogpost"}
          minLength={300}
          maxLength={2000}
          register={register}
          errors={errors}
          requiredNeeded={true}
          rows={10}
          errorMessage={"Dit veld is verplicht"}
        />
        <Button
          buttonText={"toevoegen"}
          type="submit"
          className={"form-button"}
        />
      </form>
    </>
  )
}

export default NewPost;