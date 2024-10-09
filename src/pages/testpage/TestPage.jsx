import "./TestPage.css"

import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {useState} from "react";

function TestPage() {

  const url = "http://localhost:3000/posts";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchApi(fetchType, configOrData) {
    console.log(fetchType)
    try {
      setLoading(true);

      const fetchData = await axios[fetchType](url, configOrData)
      console.log(fetchData.data);
    } catch (ex) {
      console.error(ex.message)
      setError(ex.message);
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={"test-page"}>
      <Button
        buttonText={"test API"}
        className={"default-variant"}
        onClick={() => fetchApi("get")}
      />
      <Button
        buttonText={"POST 6"}
        className={"default-variant"}
        onClick={() => fetchApi("get", {param: {id: 6}})}
      />
      <Button
        buttonText={"NEW POST"}
        className={"default-variant"}
        onClick={() => fetchApi("post", {
          "title": "Wat gebruiker heeft ingevuld",
          "subtitle": "Wat gebruiker heeft ingevuld",
          "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
          "author": "Voornaam achternaam",
          "created": "2023-09-21T09:30:00Z",
          "readTime": 1,
          "comments": 0,
          "shares": 0
        })}
      />
    </main>
  )
}

export default TestPage;