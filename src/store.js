import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let peopleStore = (set) => ({
	people: ['Rayman', 'Moe', 'Oby'],
	addPerson: (person) => set((state) => ({ people: [...state.people, person] })),
	deletePerson: (person) => set((state) => ({ people: [...state.people].filter((p) => p !== person) }))
});
let settingsStore = (set) => ({
	dark: false,
	updateDarkMod: () => set((state) => ({ dark: !state.dark }))
});

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: 'user_settings' });
peopleStore = devtools(peopleStore);

export const useSettingsStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);
// export.mod
