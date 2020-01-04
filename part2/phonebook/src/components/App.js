import React, { useState, useEffect } from "react";

import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import Notification from "./Notification";

import personServices from "../services/personServices";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameFilter, setNameFilter] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleNameChange = event => setNewName(event.target.value);
	const handleNumberChange = event => setNewNumber(event.target.value);
	const handleNameFilterChange = event => setNameFilter(event.target.value);

	const handleSubmit = event => {
		event.preventDefault();

		const person = persons.find(person => person.name === newName);

		if (person) {
			const replace = window.confirm(
				`${newName} already exists in the phonebook. Replace new number with the new one?`
			);

			const newPerson = {
				...person,
				number: newNumber
			};

			return replace
				? personServices
						.updatePerson(person.id, newPerson)
						.then(() => window.location.reload())
				: "";
		} else {
			const newPerson = {
				id: persons[persons.length - 1].number,
				name: newName,
				number: newNumber
			};

			setNewName("");
			setNewNumber("");

			setSuccessMessage("Done");
      setTimeout(()=> setSuccessMessage(""), 2000);
			return personServices
				.addPerson(newPerson)
				.then(response => setPersons(persons.concat(response)));
		}
	};

	useEffect(() => {
		personServices.getAll().then(response => setPersons(response));
	}, []);

	return (
		<div>
			<Notification successMessage={successMessage} />

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
