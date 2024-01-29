import { Person, Persons } from "@/persons";
import { ChangeEvent, FormEvent, useState } from "react";
import createPerson from "./person.helper";
import createPersonsList from "./persons-list.helper";

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
  addPerson(person: Person): void,
  updatePerson(person: Partial<Person>): void,
  deletePerson(personId: string): void,
  toggleActive(personId: string): void,
}


export const usePersonsStore = () => {
  // Create a empty values person
  const emptyPerson = createPerson();
  const personsList = createPersonsList();

  const [persons, setPersons] = useState<Person[]>(personsList);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);  
  const [dataForm, setDataForm] = useState<Partial<Person>>(emptyPerson);
  const [newPerson, setNewPerson] = useState(emptyPerson);

 

   /**
   * Adds a new person to the list.
   *
   * @param {Person} person - The person object to be added.
   * @returns {void}
   */
   const createNewPerson = (person: Person): void => {
    setNewPerson((prevNewPerson) => ({ ...prevNewPerson, person }));
  };


  /**
   * Handles the edit action for a person with the specified ID.
   *
   * @param {string} person - The ID of the person to edit.
   * @returns {void}
   */
  const updatePerson = (person: Partial<Person>): void => {
    setDataForm(person);
  };


  /**
   * Adds a new person to the list.
   *
   * @param {Person} person - The person object to be added.
   * @returns {void}
   */
  const addPerson = (person: Person): void => {
    setPersons([...persons, person]);
    setDataForm(emptyPerson);
  };

  /**
   * Deletes a person from the list based on the person ID.
   *
   * @param {string} personId - The ID of the person to be deleted.
   * @returns {void}
   */
  const deletePerson = (personId: string): void => {
    setPersons(
      persons.filter((person) => person.id !== personId)
    );
  };

  /**
   * Toggles the active status of a person in the list.
   *
   * @param {string} personId - The ID of the person to toggle.
   * @returns {void}
   */
  const toggleActive = (personId: string): void => {
    setPersons(
      persons.map((person) => {
        if (person.id === personId) {
          return { ...person, active: !person.active };
        } else {
          return person;
        }
      })
    );
  };

  //se le pasa objeto
  const selectPerson = (person: Person | null): void => {
    setSelectedPerson(person);
  };





    return {
      newPerson,
      dataForm,
      persons,
      selectedPerson,
      selectPerson,
      addPerson,
      updatePerson,
      deletePerson,
      toggleActive,
      createNewPerson,
    }

}
