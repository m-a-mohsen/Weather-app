import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form /Form";
import { uid } from "uid";
import { List } from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivity] = useState([]);

  function handleAddActivity(newActivity) {
    console.log([...activities, { ...newActivity, id: uid() }]);
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <>
      <h1> hello mahmoud</h1>

      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
