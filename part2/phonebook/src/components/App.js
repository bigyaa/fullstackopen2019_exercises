import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const baseUrl = "http://localhost:3009/persons";

  useEffect(() => {
    axios.get(baseUrl).then(response => setPersons(response.data));
  }, []);

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleNameFilterChange = event => setNameFilter(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists in the phonebook`);
    } else {
      axios
        .post(baseUrl, {
          id: persons.length + 1,
          name: newName,
          number: newNumber
        })
        .then(response => setPersons(persons.concat(response.data)));

      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
      />

      <h2>Add a New Person</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  );
};

export default App;
