import React from "react";

const Persons = props => {
  const { persons, nameFilter } = props;

  return (
    <ul>
      {nameFilter
        ? persons.length > 0 &&
          persons.map(
            person =>
              person.name.toLowerCase().includes(nameFilter.toLowerCase()) && (
                <li key={person.id}>
                  {person.name} {person.number}
                </li>
              )
          )
        : persons.length > 0 &&
          persons.map(person => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))}
    </ul>
  );
};

export default Persons;
