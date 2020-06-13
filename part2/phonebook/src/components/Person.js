import React from "react";
import personServices from "../services/personServices";

const Person = (props) => {
	const { setNewName, setNewNumber, person, setIsEdit, setSelectedId } = props;

	const handleDelete = (person) => {
		const remove = window.confirm(`Remove ${person.name}?`);

		return remove
			? personServices
					.removePerson(person.id)
					.then(() => window.location.reload())
			: "";
	};

	const handleUpdate = (person) => {
		setNewName(person.name);
		setNewNumber(person.number);
		setSelectedId(person.id);
		setIsEdit(true);
	};

	return (
		<tr>
			<td>{person.name}</td>
			<td> {person.number}</td>
			<td>
				<button onClick={() => handleDelete(person)}>Delete</button>
			</td>
			<td>
				<button onClick={() => handleUpdate(person)}>Edit</button>
			</td>
		</tr>
	);
};
export default Person;
