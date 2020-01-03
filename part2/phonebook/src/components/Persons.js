import React from "react";

const Persons = props => {
  const { persons, nameFilter } = props;

  return (
    <ul>
      {nameFilter
        ? persons.map(
            person =>
              person.name.toLowerCase().includes(nameFilter.toLowerCase()) && (
                <li key={person.name}>
                  {person.name} {person.number}
                </li>
              )
          )
        : persons.map(person => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
    </ul>
  );
};

export default Persons;
