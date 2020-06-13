import React from "react";
import personServices from "../services/personServices";
import PersonForm from "./PersonForm";

const handleDelete = (person) => {
	const remove = window.confirm(`Remove ${person.name}?`);

	return remove
		? personServices
				.removePerson(person.id)
				.then(() => window.location.reload())
		: "";
};

const handleUpdate = (person) => {
	// handleNameChange(person.name);
	// handleNumberChange(person.number);
};

const Person = (props) => {
	const { handleNameChange, handleNumberChange, person } = props;
	return (
		<tr>
			<td>{person.name}</td>
			<td> {person.number}</td>
			<td>
				<button onClick={() => handleDelete(person)}>Delete</button>
				<button onClick={() => handleUpdate(person)}>Edit</button>
			</td>
		</tr>
	);
};
export default Person;
