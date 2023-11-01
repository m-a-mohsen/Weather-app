/* eslint-disable react/prop-types */
export function List({ list, onDeleteActivity }) {
  console.log(list)
  return (
    <ul>
      {list.map((element) => (
        <>
          <li key={element.id}>
            {element.name}
            <button key={element.id} onClick={() => onDeleteActivity(element.id)}>
              x
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}
