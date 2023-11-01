import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form /Form";
import { uid } from "uid";

function App() {
  const [activities, setActivity] = useState("");

  function handleAddActivity(newActivity) {
    setActivity([...activities, { newActivity, d: uid() }]);
  }

  return (
    <>
      <h1> hello mahmoud</h1>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
