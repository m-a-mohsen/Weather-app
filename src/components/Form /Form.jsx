/* eslint-disable react/prop-types */
import { FormButton } from "../Button/Button";

export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    // console.log(form);
    onAddActivity({
      name: form.elements.name.value,
      isForGoodWeather: form.elements.isForGoodWeather.checked,
    });

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add A New Activity</h2>
      <label>
        What should you do? <input name="name" />
      </label>
      <hr />
      <label>
        Is the Weather Good? <input type="checkbox" name="isForGoodWeather" />
      </label>
      <hr />
      <FormButton />
    </form>
  );
}
