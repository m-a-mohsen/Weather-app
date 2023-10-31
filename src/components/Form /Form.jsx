import { FormButton } from "../Button/Button";

export function Form() {
  return (
    <div>
      <h1>Add A New Activity</h1>
      <label>
        Name of the Activity? <input name="activity-name" />
      </label>
      <hr />
      <label>
        Is the Weather Good? <input type="checkbox" name="myCheckbox" />
      </label>
      <hr />
      <FormButton />
    </div>
  );
}
