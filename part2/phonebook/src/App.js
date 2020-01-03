import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInputChange = event => setNewName(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    persons.find(person =>
      person.name === newName
        ? alert(`${newName} already exists in the phonebook`)
        : setPersons(persons.concat({ name: newName }))
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
