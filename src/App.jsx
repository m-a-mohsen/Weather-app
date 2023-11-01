import './App.css';
import { Form } from './components/Form /Form';
import { uid } from 'uid';
import { List } from './components/List/List';
import useLocalStorageState from 'use-local-storage-state';
import { useEffect } from 'react';
import { WeatherHeader } from './components/WeatherHeader/WeatherHeader';

function App() {
  // -------------- UI States ------------------------
  const [activities, setActivity] = useLocalStorageState('activities', {
    defaultValue: [],
  });
  const [weatherData, setWeatherData] = useLocalStorageState('Weather Data', {
    defaultValue: {},
  });
  // ------------- Fetching -------------------------------
  let url = 'https://example-apis.vercel.app/api/weather/rainforest';
  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setWeatherData(data)
    }
    fetchWeather();
  }, []);
  // ------------ Handling events ----------------------------
  function handleAddActivity(newActivity) {
    // console.log([...activities, { ...newActivity, id: uid() }]);
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }
  function handleDeleteActivity(id) {
    const listAfterDelete = activities.filter((element) => element.id !== id)
    console.log('new list', listAfterDelete)
  setActivity(listAfterDelete)
}
  // ------ Filtering Activities List -----------
  const isGoodWeather = false;
  const filteredActivities = activities.filter(
    (element) => element.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      <WeatherHeader box={weatherData} />
      <h1> {isGoodWeather ? 'Good Weather' : 'Bad Weather'}</h1>

      <List list={filteredActivities} onDeleteActivity={handleDeleteActivity}/>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
