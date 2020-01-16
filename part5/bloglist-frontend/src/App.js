import React, { useState, useEffect } from "react";
import './App.css';
// import PersonForm from "./PersonForm";
// import Persons from "./Persons";
// import Filter from "./Filter";
// import Notification from "./Notification";

import blogServices from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState(['wut']);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleNameFilterChange = event => setNameFilter(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
console.log(blogs)
    // const person =
    //   persons.length > 0 && persons.find(person => person.name === newName);

    // if (person) {
    //   const replace = window.confirm(
    //     `${newName} already exists in the phonebook. Replace new number with the new one?`
    //   );

    //   const newPerson = {
    //     ...person,
    //     number: newNumber
    //   };

    //   return replace
    //     ? personServices
    //         .updatePerson(person.id, newPerson)
    //         .then(() => window.location.reload())
    //     : "";
    // } else {
    //   const newPerson = {
    //     id: persons.length > 0 ? persons[persons.length - 1].number : 11111,
    //     name: newName,
    //     number: newNumber
    //   };

    //   setNewName("");
    //   setNewNumber("");

    //   setSuccessMessage("Done");

    //   setTimeout(() => setSuccessMessage(""), 2000);

    //   return personServices
    //     .addPerson(newPerson)
    //     .then(response => setPersons(persons.concat(response)));
    // }
  };

  useEffect(() => {
    blogServices.getAll().then(response => setBlogs(response));
  }, []);

  return (
    <form onSubmit={handleSubmit} className={'login-form'}>
      <div>
        User Name: <input value={username} onChange={handleNameChange} />
      </div>
      <br />
      <div>
        Password: <input value={password} onChange={handlePasswordChange} />
      </div>
      <br />
      <div>
        <button type="submit" className={'login-button'}>Login</button>
      </div>
    </form>
  );
};

export default App;
