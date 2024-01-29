import { Table, TableContainer, Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { Person } from "../../persons";
import TableBody from "@mui/material/TableBody";
import { Button } from "@mui/material/";

const personsTableHeader = [
  "ID",
  "First name",
  "Last name",
  "Job title",
  "Birth date",
  "Active",
  "Action",
];

type PersonsTableProps = {
  onActivate: (personId: string) => void;
  onDelete: (personId: string) => void;
  onSelect: (person: Person | null) => void;
  selectedPerson: Person | null;
  // onEdit: (id: string) => void;
  onUpdate(person: Partial<Person>): void;
  persons: Person[];
};

export const PersonsTable = ({
  persons,
  onActivate,
  onDelete,
  onSelect,
  selectedPerson,
  onUpdate,
}: PersonsTableProps) => {
  const handleSelect = (id: string) => {
    const selectRow = persons.find((person) => person.id === id);
    onSelect(selectRow !== undefined ? selectRow : null);
  };

  const handleUpdate = (id: string) => {
    const selectRow = persons.find((person) => person.id === id);

    if (selectRow) {
      onUpdate(selectRow);
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="list of people">
          {/* <PersonsTableHeader />
          <PersonsTableContent
            onActivate={handleActivate}
            onDelete={handleDelete}
            onEdit={handleEdit}
            persons={persons}
          /> */}
          <TableHead
            sx={(theme) => ({
              color: "white",
              backgroundColor: theme.palette.grey[300],
            })}
          >
            <TableRow>
              {personsTableHeader.map((data, index) => (
                <TableCell key={index}>{data}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* CONTAINTER **/}
          <TableBody>
            {Array.isArray(persons) &&
              persons.map((person) => (
                <TableRow
                  key={person.id}
                  selected={selectedPerson?.id === person.id}
                  onClick={() => handleSelect(person.id)}
                  hover={true}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: person.active ? "white" : "#ffbaba",
                  }}
                >
                  <TableCell>{person.id}</TableCell>
                  <TableCell>{person.firstName}</TableCell>
                  <TableCell>{person.lastName}</TableCell>
                  <TableCell>{person.jobTitle}</TableCell>
                  <TableCell>{person.birthDate}</TableCell>
                  <TableCell>{person.active ? "✅" : "❌"}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => onActivate(person.id)}
                    >
                      {person.active ? "Deactivate" : "Activate"}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => onDelete(person.id)}
                      sx={{ marginLeft: 2 }}
                    >
                      {"Delete"}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleUpdate(person.id)}
                      sx={{ marginLeft: 2 }}
                    >
                      {"Edit"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
