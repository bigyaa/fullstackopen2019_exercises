import React from "react";
import Person from "./Person";

const Persons = (props) => {
	const { persons, nameFilter, setErrorMessage } = props;

	return (
		<table>
			<tbody>
				{nameFilter
					? persons.length > 0 &&
					  persons.map((person) => {
							setErrorMessage("");
							return person.name
								.toLowerCase()
								.includes(nameFilter.toLowerCase()) ? (
								<Person {...props} person={person} key={person.id} />
							) : (
								setErrorMessage("The name doesn't exist")
							);
					  })
					: persons.length > 0 &&
					  persons.map((person) => {
							setErrorMessage("");
							return <Person {...props} person={person} key={person.id} />;
					  })}
			</tbody>
		</table>
	);
};

export default Persons;
