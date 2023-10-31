import { FormButton } from '../Button/Button';

export function Form({ onAddActivity }) {
// export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    const form = event.target
    // const data = Object.fromEntries(formData);
    
    onAddActivity({
      name: form.elements.name.value,
      isForGoodWeather: form.elements.isForGoodWeather.checked
    });
   
    
    // console.log(form.elements.name.value);
    // console.log(form.elements.isForGoodWeather.checked);

    event.target.reset()
    event.target.elements.name.focus()
    // console.log(event.target.elements);
  }
  

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Add A New Activity</h1>
      <label>
        Name of the Activity? <input name='name' />
      </label>
      <hr />
      <label>
        Is the Weather Good? <input type='checkbox' name='isForGoodWeather' />
      </label>
      <hr />
      <button type='submit'>test</button>
      <FormButton />
    </form>
  );
}
