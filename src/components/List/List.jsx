/* eslint-disable react/prop-types */
export function List({ list, onDeleteActivity, id }) {
  return (
    <ul>
      {list.map((element) => (
        <>
          <li key={element.id}>
            {element.name}
            <button onClick={()=>onDeleteActivity(id)}>x</button>
          </li>
        </>
      ))}
    </ul>
  );
}
