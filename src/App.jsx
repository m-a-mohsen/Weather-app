import "./App.css";
import { Form } from "./components/Form /Form";
import { uid } from "uid";
import { List } from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { WeatherHeader } from "./components/WeatherHeader/WeatherHeader";
import { LocationSelector } from "./components/LocationSwitch/LocationSwitch";

function App() {
  // -------------- UI States ------------------------
  const [activities, setActivity] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weatherData, setWeatherData] = useLocalStorageState("Weather Data", {
    defaultValue: {},
  });
  const [fetchInterval, setFetchInterval] = useState(null);

  const [backgroundImage, setBackgroundImage] = useState(
    'https://onetreeplanted.org/cdn/shop/articles/amazon_rainforest_mist_1350x.png?v=1680706265'
  );

  const [apiUrl, setApiUrl] = useState(
    "https://example-apis.vercel.app/api/weather/rainforest"
  );

  const handleLocationChange = (newLocation) => {
    setApiUrl(`https://example-apis.vercel.app/api/weather/${newLocation}`);
    switch (newLocation) {
      case "sahara":
        setBackgroundImage(
          "https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
        );
        break;
      case "rainforest":
        setBackgroundImage(
          "https://onetreeplanted.org/cdn/shop/articles/amazon_rainforest_mist_1350x.png?v=1680706265"
        );
        break;
      case "europe":
        setBackgroundImage(
          "https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/"
        );
        break;
      default:
        setBackgroundImage(
          "https://www.meereisportal.de/fileadmin/_processed_/7/b/csm_Arktis_Arctic_Meereisimpression_Sea-ice_impression_Mine_Tekman_54c5575307.jpg"
        );
    }
  };
  console.log("handle location change", apiUrl);

  // ------------- Fetching -------------------------------
  // let url = "https://example-apis.vercel.app/api/weather";
  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
    }

    fetchWeather();

    // const intervalID = setInterval(fetchWeather, 5000);
    // setFetchInterval(intervalID);
    // // cleanup function
    // return () => {
    //   if (fetchInterval) {
    //     clearInterval(fetchInterval);
    //   }
    // };
  }, [apiUrl]);
  // ------------ Handling events ----------------------------
  function handleAddActivity(newActivity) {
    console.log([...activities, { ...newActivity, id: uid() }]);
    setActivity([...activities, { ...newActivity, id: uid() }]);
  }
  function handleDeleteActivity(id) {
    console.log('id', id);
    const listAfterDelete = activities.filter((element) => element.id !== id);
    console.log('new list', listAfterDelete);
    setActivity(listAfterDelete);
  }
  // ------ Filtering Activities List -----------
  const isGoodWeather = weatherData.isGoodWeather;
  const filteredActivities = activities.filter(
    (element) => element.isForGoodWeather === isGoodWeather
  );

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set backgroundImage dynamically
      }}
    >
      <LocationSelector onLocationChange={handleLocationChange} />
      <WeatherHeader box={weatherData} />
      <h1> {isGoodWeather ? 'Good Weather' : 'Bad Weather'}</h1>

      <List list={filteredActivities} onDeleteActivity={handleDeleteActivity} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
