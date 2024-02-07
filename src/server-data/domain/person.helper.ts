import { v4 as uuidv4 } from 'uuid'
import { Person } from './person.type'


/**
 * Creates a new person object.
 *
 * @param {string} [firstName=''] - The first name of the person.
 * @param {string} [lastName=''] - The last name of the person.
 * @param {string} [jobTitle=''] - The job title of the person.
 * @param {string} [birthDate=''] - The birth date of the person.
 * @returns {Person} A new person object.
 */
export function createPerson (firstName: string = '', lastName: string = '', jobTitle: string = '', birthDate: string = '' ): Person {
  
  return {
    id: uuidv4(),
    firstName,
    lastName,
    jobTitle,
    birthDate,
    active: true
  }
}


/**
 * Creates a list of persons with predefined data.
 * 
 * @returns {Person[]} An array of Person objects.
 */

export function createPersonsList (): Person[] {

  return [  
    createPerson('Jorge', 'Ramirez', 'Backend developer', '1982-11-22'),
    createPerson('Sebastián', 'Velázquez', 'Systems Admin & Developer', '1986-08-07'),
    createPerson('Alberto', 'Recio', 'Frontend Developer', '1983-02-28'),
    createPerson('Xevi', 'Serrat', 'Frontend Developer', '1986-05-28'),
    createPerson('Christian', 'Feldermann', 'Head of Technology', '1974-01-01')  
  ]  
} 
