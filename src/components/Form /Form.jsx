import { FormButton } from '../Button/Button';

export function Form({ onAddActivity }) {
// export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // onAddActivity(data);
    event.taget.reset()
    console.log(data);
  }
  

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Add A New Activity</h1>
      <label>
        Name of the Activity? <input name='name' />
      </label>
      <hr />
      <label>
        Is the Weather Good? <input type='checkbox' name='isForGood' />
      </label>
      <hr />
      <button type='submit'>test</button>
      <FormButton />
    </form>
  );
}
