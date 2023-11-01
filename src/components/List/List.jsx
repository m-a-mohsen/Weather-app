/* eslint-disable react/prop-types */
export function List({ list }) {
  return (
    <ul>
      {list.map((element) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
  );
}
