import { useState } from "react";
import { Table, TableContainer, Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { PersonsTableContent } from "./persons-table-content.component";
import { PersonsTableHeader } from "./persons-table-header.component";
import { FormPerson } from "./form-person.component";
import { Persons } from "@/persons";

export const PersonsTable = () => {
  const [persons, setPersons] = useState<Persons[]>(Persons);

  const handleActivate = (id: number) => {
    setPersons(
      persons.map((person) => {
        if (person.id === id) {
          return { ...person, active: !person.active };
        } else {
          return person;
        }
      })
    );
  };

  const handleDelete = (id: number) => {
    setPersons(persons.filter((person) => person.id !== id));
  };
  const handleEdit = (id: number) => {
    alert("handleEdit");
    // console.log("handleEdit id", id);
  };

  const handleCreatePerson = (dataPerson: Persons) => {
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
