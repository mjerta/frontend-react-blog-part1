import "./TestPage.css"

import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {useState} from "react";
import errorOuput from "../../components/erroroutput/ErrorOuput.jsx";

function TestPage() {

  const url = "http://localhost:3000/posts";
  const [loading, setLoading] = useState(false);
  const [hasError, setHaserror] = useState(false);

  async function fetchApi(fetchType, id, data) {
    console.log(fetchType)
    try {
      setLoading(true);
      setHaserror(false);
      const requestUrl = id ? `${url}/${id}` : url;
      const response = await axios[fetchType](requestUrl, data !== undefined ? data : {});
      console.log(response.data);
    } catch (ex) {
      setHaserror(true);
      ex.response.status === 404 ?
        console.error("no record found") :
        console.error("something else went wrong");
    } finally {
      setLoading(false)
    }
  }

  console.log(!hasError ?  "succes" : "errors found");
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
        onClick={() => fetchApi("get", 5)}
      />
      <Button
        buttonText={"NEW POST"}
        className={"default-variant"}
        onClick={() => fetchApi("post", false, {
            "title": "Wat gebruiker heeft ingevuld",
            "subtitle": "Wat gebruiker heeft ingevuld",
            "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
            "author": "Voornaam achternaam",
            "created": "2023-09-21T09:30:00Z",
            "readTime": 1,
            "comments": 0,
            "shares": 0
          }
        )}
      />
      <Button
        buttonText={"DELETE POST"}
        className={"default-variant"}
        onClick={() => fetchApi("delete", 5)}
      />
      <Button
        buttonText={"UPDATE POST"}
        className={"default-variant"}
        onClick={() => fetchApi("put", 20, {
            "title": "Wat gebruisssker heeft ingevuld",
            // "subtitle": "Wat gebruiker heeft ingevuld",
            // "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
            // "author": "Voornaam achternaam",
            "created": "2023-09-21T09:30:00Z",
            // "readTime": 1,
            // "comments": 0,
            "shares": 0
          }
        )}
      />
    </main>
  )
}

export default TestPage;