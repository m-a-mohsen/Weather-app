/* eslint-disable react/prop-types */
export function WeatherHeader({ box }) {
  return (
    <>
      <h1>
        {box.condition} {box.temperature} &deg;C
      </h1>
      <h3>Welcome to the {box.location}</h3>
    </>
  );
}
