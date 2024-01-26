/**
 * @typedef {Object} Person
 * @property {string} id - Unique identifier for the person.
 * @property {string} name - Name of the person.
 * @property {string} lastName - Last name of the person.
 * @property {string} jobTitle - Job title of the person.
 * @property {string} birthDate - Birth date of the person.
 * @property {boolean} active - Indicates whether the person is active or not.
 */
export type Person = {
	id: string;
	name: string;
	lastName: string;
	jobTitle: string;
	birthDate: string;
	active: boolean;
};

export const Persons:Person[] = [
	{
		id: '1',
		name: 'Jorge',
		lastName: 'Ramirez',
		jobTitle: 'Backend Developer',
    birthDate: '22/11/1982',
    active: true
	},
  {
		id: '2',
		name: 'Sebastián',
		lastName: 'Velázquez',
		jobTitle: 'Systems Admin & Developer',
    birthDate: '07/08/1986',
    active: true
	},
  {
		id: '3',
		name: 'Alberto',
		lastName: 'Recio',
		jobTitle: 'Frontend Developer',
    birthDate: '22/11/1982',
    active: true
	},
  {
		id: '4',
		name: 'Xevi',
		lastName: 'Serrat',
		jobTitle: 'Frontend Developer',
    birthDate: '28/05/1986',
    active: true
	},
  {
		id: '5',
		name: 'Christian',
		lastName: 'Feldermann',
		jobTitle: 'Head of Technology',
    birthDate: '01/01/1974',
    active: true
	},
];
