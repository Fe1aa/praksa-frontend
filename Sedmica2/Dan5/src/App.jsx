import { useState } from "react";
import PersonList from "./components/PersonList.jsx";
import PersonForm from "./components/PersonForm.jsx";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: "Joe", age: 30 },
    { id: 2, name: "Sara", age: 25 },
  ]);

  function addPerson(person) {
    setPeople([...people, { id: Date.now(), ...person }]);
  }

  return (
    <div>
      <h1>People</h1>
      <PersonForm onAdd={addPerson} />
      <PersonList people={people} />
    </div>
  );
}

export default App;
