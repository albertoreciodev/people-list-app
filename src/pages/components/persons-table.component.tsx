import { useState } from "react";
import { Table, TableContainer, Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { PersonsTableContent } from "./persons-table-content.component";
import { PersonsTableHeader } from "./persons-table-header.component";
import { FormPerson } from "./form-person.component";
import { Person, Persons } from "@/persons";

export const PersonsTable = () => {
  /**
   * State hook for managing a list of persons.
   *
   * @type {Persons}
   */

  const [persons, setPersons] = useState<Person[]>(Persons);

  /**
   * Handle activation of a person.
   *
   * @param {string} id - The ID of the person to be activated.
   * @returns {void}
   */
  const handleActivate = (id: string) => {
    setPersons(
      persons.map((person) => {
        if (Number(person.id) === Number(id)) {
          return { ...person, active: !person.active };
        } else {
          return person;
        }
      })
    );
  };

  /**
   * Handles the deletion of a person from the persons array.
   *
   * @param {string} id - The id of the person to be deleted.
   * @returns {void}
   */
  const handleDelete = (id: string) => {
    setPersons(persons.filter((person) => Number(person.id) !== Number(id)));
  };

  /**
   * Handles the edit action for a person with the specified ID.
   *
   * @param {string} id - The ID of the person to edit.
   * @returns {void}
   */
  const handleEdit = (id: string) => {
    //alert(`handleEdit: ${id}`);
  };

  const handleCreatePerson = (dataPerson: Person) => {
    setPersons([...persons, dataPerson]);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="list of people">
          <PersonsTableHeader />
          <PersonsTableContent
            onActivate={handleActivate}
            onDelete={handleDelete}
            onEdit={handleEdit}
            persons={persons}
          />
        </Table>
      </TableContainer>
      <Box marginTop={5}>
        <Typography variant="h5" marginBottom={2}>
          {`Create a new person`}
        </Typography>
        <FormPerson onCreate={handleCreatePerson} />
      </Box>
    </>
  );
};
