/**
 * @typedef {Object} Person
 * @property {string} id - Unique identifier for the person.
 * @property {string} firstName - Name of the person.
 * @property {string} lastName - Last name of the person.
 * @property {string} jobTitle - Job title of the person.
 * @property {string} birthDate - Birth date of the person.
 * @property {boolean} active - Indicates whether the person is active or not.
 */
export type Person = {
	id: string;
	firstName: string;
	lastName: string;
	jobTitle: string;
	birthDate: string;
	active: boolean;
};