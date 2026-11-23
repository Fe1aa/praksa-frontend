import { useState } from "react";

function PersonForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !age) return;
    onAdd({ name: name.trim(), age: Number(age) });
    setName("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />{" "}
      <br />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default PersonForm;
