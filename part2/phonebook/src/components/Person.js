import React from "react";

const handleDelete = event => {};
const Person = ({ person }) => (
	<tr>
		<td>{person.name}</td>
		<td> {person.number}</td>
		<td>
			<button onClick={handleDelete}>Delete</button>
		</td>
	</tr>
);
export default Person;
