export function List({ activities }) {
  return (
    <ul>
      {activities.map((element) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
  );
}
