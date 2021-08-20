import React from 'react';
import randomColor from 'randomcolor';
import { usePeopleStore } from '../store';

function People() {
	const people = usePeopleStore((state) => state.people);
	const deletePerson = usePeopleStore((state) => state.deletePerson);

	const deletePersonFunc = (p) => {
		deletePerson(p);
	};
	return (
		<div style={{ overflow: 'scroll', height: '300px' }}>
			{people.map((p) => (
				<div key={p} style={{ display: 'flex', justifyContent: 'space-between', margin: 10 }}>
					<span style={{ marginRight: 5, color: randomColor() }} key={p}>
						{p}
					</span>
					<button onSubmit={() => deletePersonFunc(p)} onClick={() => deletePersonFunc(p)}>
						delete
					</button>
				</div>
			))}
		</div>
	);
}

export default People;
