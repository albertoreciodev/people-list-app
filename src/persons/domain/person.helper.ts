import { Person } from '@/persons'
import { v4 as uuidv4 } from 'uuid'


/**
 * Creates a new person object.
 *
 * @param {string} [firstName=''] - The first name of the person.
 * @param {string} [lastName=''] - The last name of the person.
 * @param {string} [jobTitle=''] - The job title of the person.
 * @param {string} [birthDate=''] - The birth date of the person.
 * @returns {Person} A new person object.
 */
export default function createPerson (firstName: string = '', lastName: string = '', jobTitle: string = '', birthDate: string = '' ): Person {
  return {
    id: uuidv4(),
    firstName,
    lastName,
    jobTitle,
    birthDate,
    active: true
  }
}
