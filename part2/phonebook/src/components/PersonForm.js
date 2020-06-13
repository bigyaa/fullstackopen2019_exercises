import React from "react";

const PersonForm = (props) => {
	const {
		newName,
		newNumber,
		handleNameChange,
		handleNumberChange,
		handleSubmit,
		handleEdit,
		isEdit,
	} = props;

	return (
		<form>
			<div>
				Name: <input value={newName} onChange={handleNameChange} />
			</div>
			<br />
			<div>
				Number: <input value={newNumber} onChange={handleNumberChange} />
			</div>
			<br />
			<div>
				{isEdit ? (
					<button onClick={handleEdit}>Edit</button>
				) : (
					<button onClick={handleSubmit}>Add</button>
				)}
			</div>
		</form>
	);
};

export default PersonForm;
