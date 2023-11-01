import "./App.css";
import { Form } from "./components/Form /Form";
import { uid } from "uid";
import { List } from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivity] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    console.log([...activities, { ...newActivity, id: uid() }]);
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }
  const isGoodWeather = false;
  const filteredActivities = activities.filter(
    (element) => element.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <h1> {isGoodWeather ? "Good Weather" : "Bad Weather"}</h1>

      <List list={filteredActivities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
