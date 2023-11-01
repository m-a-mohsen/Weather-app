/* eslint-disable react/prop-types */
export function List({ list, onDeleteActivity }) {
  // console.log(list)
  return (
    <ul>
      {list.map((element) => (
        <>
          <li key={element.id}>
            {element.name}
            <button onClick={() => onDeleteActivity(element.id)}>
              x
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}
