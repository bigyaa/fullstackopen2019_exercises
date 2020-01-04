import React from "react";
import Person from "./Person";

const Persons = props => {
	const { persons, nameFilter } = props;

	return (
		<table>
			<tbody>
				{nameFilter
					? persons.length > 0 &&
					  persons.map(
							person =>
								person.name
									.toLowerCase()
									.includes(nameFilter.toLowerCase()) && (
									<Person person={person} key={person.id} />
								)
					  )
					: persons.length > 0 &&
					  persons.map(person => <Person person={person} key={person.id} />)}
			</tbody>
		</table>
	);
};

export default Persons;
