import { usePeopleStore, useSettingsStore } from './store';
import './App.css';
import People from './Components/People';
import Input from './Components/Input';

function App() {
	const people = usePeopleStore((state) => state.people);
	const dark = useSettingsStore((state) => state.dark);
	const updateDarkMod = useSettingsStore((state) => state.updateDarkMod);

	console.log(people);
	return (
		<div className="App">
			<header className={`App-header ${dark ? 'dark' : ''}`}>
				<h5>We have {people.length} person in the list</h5>
				<button onClick={() => updateDarkMod()}>Change Mode</button>
				<Input />
				<People />
			</header>
		</div>
	);
}

export default App;
