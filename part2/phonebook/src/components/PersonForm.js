import React from "react";

const PersonForm = props => {
  const {
    newName,
    newNumber,
    handleNameChange,
    handleNumberChange,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} />
      </div>
      <br />
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <br />
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
