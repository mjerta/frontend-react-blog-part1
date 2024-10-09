import "./TestPage.css"

import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {useState} from "react";

function TestPage() {

  const url = "http://localhost:3000/posts";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function fetchApi() {
    try {
      setLoading(true);
      const fetchData = await axios.get(url);
      console.log(fetchData.data);
    }
    catch (ex) {
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
    </main>
  )
}

export default TestPage;