import React, { useState, useEffect } from "react";

import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import Notification from "./Notification";
import Loader from "./Loader";
import "../style.css";
import "../helper.css";

import personServices from "../services/personServices";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameFilter, setNameFilter] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isEdit, setIsEdit] = useState(false);
	const [selectedId, setSelectedId] = useState();
	const [loading, setLoading] = useState(true);

	const handleNameChange = (event) => setNewName(event?.target?.value || event);
	const handleNumberChange = (event) =>
		setNewNumber(event?.target?.value || event);
	const handleNameFilterChange = (event) => setNameFilter(event.target.value);

	const handleSubmit = (event) => {
		event.preventDefault();

		const person =
			persons.length > 0 && persons.find((person) => person.name === newName);

		if (person) {
			const replace = window.confirm(
				`${newName} already exists in the phonebook. Replace new number with the new one?`
			);

			const newPerson = {
				...person,
				number: newNumber,
			};

			return replace
				? personServices
						.updatePerson(person.id, newPerson)
						.then(() => window.location.reload())
				: "";
		} else {
			const newPerson = {
				id: persons.length > 0 ? persons[persons.length - 1].number : 11111,
				name: newName,
				number: newNumber,
			};

			setNewName("");
			setNewNumber("");

			setSuccessMessage("Done");

			setTimeout(() => setSuccessMessage(""), 2000);

			return personServices
				.addPerson(newPerson)
				.then((response) => setPersons(persons.concat(response)));
		}
	};

	const handleEdit = (event) => {
		event.preventDefault();

		const person =
			persons.length > 0 && persons.find((person) => person.id === selectedId);

		const newPerson = {
			...person,
			name: newName,
			number: newNumber,
		};

		return personServices
			.updatePerson(selectedId, newPerson)
			.then(() => window.location.reload());
	};

	useEffect(() => {
		personServices
			.getAll()
			.then((response) => setPersons(response))
			.then(() => setLoading(false));
	}, []);

	return (
		<div className="main-container">
			<div className="main">
				<aside className="form">
					<h2>Add a New Person</h2>
					<PersonForm
						newName={newName}
						newNumber={newNumber}
						handleNameChange={handleNameChange}
						handleNumberChange={handleNumberChange}
						handleSubmit={handleSubmit}
						handleEdit={handleEdit}
						isEdit={isEdit}
					/>
				</aside>

				<div className="main-right clearfix">
					<div className="right-container">
						<section className="filter">
							<h2>Phonebook</h2>
							<Filter
								nameFilter={nameFilter}
								handleNameFilterChange={handleNameFilterChange}
							/>
						</section>

						<div className='table-container'>
							<Notification
								successMessage={successMessage}
								errorMessage={errorMessage}
							/>

							<section className="data-table">
								<h2>Numbers</h2>
								{loading ? (
									<Loader />
								) : (
									<Persons
										setNewName={setNewName}
										setNewNumber={setNewNumber}
										persons={persons}
										setIsEdit={setIsEdit}
										nameFilter={nameFilter}
										setErrorMessage={setErrorMessage}
										setSelectedId={setSelectedId}
									/>
								)}
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
