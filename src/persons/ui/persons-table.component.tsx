import {
  Table,
  TableContainer,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TableBody,
  CircularProgress,
} from "@mui/material";

import { Person } from "../domain/person.type";
import { useEffect, useState } from "react";

const personsTableHeader = [
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
  persons: Person[];
};

export const PersonsTable = ({
  persons,
  onActivate,
  onDelete,
  onSelect,
}: PersonsTableProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="list of people">
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
            {persons.length > 0 ? (
              persons.map((person) => (
                <TableRow
                  key={person.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
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
                      onClick={() => onSelect(person)}
                      sx={{ marginLeft: 2 }}
                    >
                      {"Edit"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : isLoading ? (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              `ERROR`
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
