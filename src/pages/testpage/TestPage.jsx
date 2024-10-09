import "./TestPage.css"

import Button from "../../components/button/Button.jsx";

function TestPage() {
  return (
    <main className={"test-page"}>
      <Button
        buttonText={"test API"}
        className={"default-variant"}
      />
    </main>
  )
}

export default TestPage;