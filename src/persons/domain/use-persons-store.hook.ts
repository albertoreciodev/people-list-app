
import { useState } from "react";
import { Person } from "./person.type";
import { createPersonsList } from "./person.helper";

/**
 * Represents the store for managing persons.
 *
 * @interface PersonsStore
 * @property {Person[]} persons - An array of persons.
 * @property {Person | null} selectedPerson - The currently selected person or null if none is selected.
 * @property {(person: Person | null) => void} selectPerson - Function to select a person.
 * @property {(person: Person) => void} addPerson - Function to add a new person to the store.
 * @property {(person: Partial<Person>) => void} updatePerson - Function to update an existing person in the store.
 * @property {(personId: string) => void} deletePerson - Function to delete a person from the store by ID.
 * @property {(personId: string) => void} toggleActive - Function to toggle the active status of a person by ID.
 */

interface PersonsStore {
  persons: Person[],
  selectedPerson: Person | null,
  selectPerson( person: Person | null ): void,
  addPerson( person: Person ): void,
  updatePerson( personId: string, person: Partial<Person> ): void; 
  deletePerson( personId: string ): void,
  toggleActive( personId: string ): void,
}


export const usePersonsStore = ():PersonsStore => {

  const [persons, setPersons] = useState<Person[]>(() => createPersonsList());
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);  


  /**
   * Handles the edit action for a person with the specified ID.
   *
   * @param {string} personId - The ID of the person to edit.
   * @param {Person} person - The person object to be added.
   * @returns {void}
   */
  const updatePerson = (personId: string, updatePerson: Partial<Person>): void => {
    setPersons((prevPersons) => prevPersons.map((currentPerson) => {
      if (currentPerson.id === personId) {
        return { ...currentPerson, ...updatePerson}
      } else {
        return currentPerson;
      }
    }))     
  };


  /**
   * Adds a new person to the list.
   *
   * @param {Person} person - The person object to be added.
   * @returns {void}
   */
  const addPerson = (person: Person): void => {
     setPersons((prevPersons) => [...prevPersons, person]);
  };

  /**
   * Deletes a person from the list based on the person ID.
   *
   * @param {string} personId - The ID of the person to be deleted.
   * @returns {void}
   */
  const deletePerson = (personId: string): void => {
    setPersons((prevPersons) => prevPersons.filter((person) => person.id !== personId)
    );
  };

  /**
   * Toggles the active status of a person in the list.
   *
   * @param {string} personId - The ID of the person to toggle.
   * @returns {void}
   */
  const toggleActive = (personId: string): void => {
    setPersons((prevPersons) => prevPersons.map((person) => {
        if (person.id === personId) {
          return { ...person, active: !person.active };
        } else {
          return person;
        }
      })
    );
  };

  
  const selectPerson = (person: Person | null): void => {
    setSelectedPerson(person);
  };



    return {
      persons,
      selectedPerson,
      selectPerson,
      addPerson,
      updatePerson,
      deletePerson,
      toggleActive,
    }

}