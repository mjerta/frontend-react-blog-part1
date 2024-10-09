import "./TestPage.css"

import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {useState} from "react";

function TestPage() {

  const url = "http://localhost:3000/posts";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchApi(param) {
    try {
      setLoading(true);
      console.log(param)

      const fetchData = await axios.get(url, {
        params: { id: param }
      });
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
        onClick={() => fetchApi()}
      />
      <Button
        buttonText={"POST 6"}
        className={"default-variant"}
        onClick={() => fetchApi(6)}
      />
    </main>
  )
}

export default TestPage;