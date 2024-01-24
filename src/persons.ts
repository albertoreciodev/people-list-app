export interface Persons {
	id: number;
	name: string,
	lastName: string,
	jobTitle: string,
	birthDate: string,
	active: boolean | undefined;
};

export const Persons:Persons[] = [
	{
		id: 1,
		name: 'Jorge',
		lastName: 'Ramirez',
		jobTitle: 'Backend Developer',
    birthDate: '22/11/1982',
    active: true
	},
  {
		id: 2,
		name: 'Sebastián',
		lastName: 'Velázquez',
		jobTitle: 'Systems Admin & Developer',
    birthDate: '07/08/1986',
    active: true
	},
  {
		id: 3,
		name: 'Alberto',
		lastName: 'Recio',
		jobTitle: 'Frontend Developer',
    birthDate: '22/11/1982',
    active: true
	},
  {
		id: 4,
		name: 'Xevi',
		lastName: 'Serrat',
		jobTitle: 'Frontend Developer',
    birthDate: '28/05/1986',
    active: true
	},
  {
		id: 5,
		name: 'Christian',
		lastName: 'Feldermann',
		jobTitle: 'Head of Technology',
    birthDate: '01/01/1974',
    active: true
	},
];
