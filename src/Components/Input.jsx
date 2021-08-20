import React, { useRef, useState } from 'react';
import { usePeopleStore } from '../store';

export default function Input() {
	const people = usePeopleStore((state) => state.people);
	const addPerson = usePeopleStore((state) => state.addPerson);
	const [error, setError] = useState('');

	const inputRef = useRef();
	const handleSubmition = (e) => {
		e.preventDefault();
		const userInput = inputRef.current.value;
		const userFound = people.filter((p) => userInput === p);
		if (userFound.length > 0) {
			setError('User name already exist in the list');
		} else if (!error) {
			addPerson(userInput);
			inputRef.current.value = '';
		}
	};

	const handleValidation = () => {
		const validInput = inputRef.current.value.match('^[a-zA-Z0-9_ ]*$');
		if (!validInput) {
			setError("You can't use spical charectars");
		} else {
			setError('');
		}
	};

	return (
		<div>
			{error && <span style={{ color: 'red' }}>{error}</span>}
			<form onSubmit={(e) => handleSubmition(e)}>
				<input
					style={{ padding: '5px 0px 5px 0px', outline: 'none' }}
					type="text"
					placeholder="Enter name"
					ref={inputRef}
					onChange={() => handleValidation()}
				/>
			</form>
		</div>
	);
}
