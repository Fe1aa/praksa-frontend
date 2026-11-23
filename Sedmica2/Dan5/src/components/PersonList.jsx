import Person from "./Person";

function PersonList({ people }) {
  return (
    <ul>
      {people.map((p) => (
        <Person key={p.id} name={p.name} age={p.age} />
      ))}
    </ul>
  );
}

export default PersonList;
