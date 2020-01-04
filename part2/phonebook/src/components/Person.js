import React from "react";
import personServices from "../services/personServices";

const handleDelete = person => {
	const remove = window.confirm(`Remove ${person.name}?`);

	return remove
		? personServices
				.removePerson(person.id)
				.then(() => window.location.reload())
		: "";
};

const Person = ({ person }) => (
	<tr>
		<td>{person.name}</td>
		<td> {person.number}</td>
		<td>
			<button onClick={() => handleDelete(person)}>Delete</button>
		</td>
	</tr>
);
export default Person;
