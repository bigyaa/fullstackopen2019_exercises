import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleNameFilterChange = event => setNameFilter(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists in the phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter Name:{" "}
        <input value={nameFilter} onChange={handleNameFilterChange} />
      </div>
      <h2>Add a New Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <br />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {nameFilter
          ? persons.map(
              person =>
                person.name
                  .toLowerCase()
                  .includes(nameFilter.toLowerCase()) && (
                  <li key={person.name}>
                    {person.name} {person.number}
                  </li>
                )
            )
          : persons.map(person => (
              <li key={person.name}>
                {person.name} {person.number}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default App;
