import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Person } from "../../persons";
import TableBody from "@mui/material/TableBody";
import { Button } from "@mui/material/";

/**
 * Props for the PersonsTableContent component.
 *
 * @typedef {Object} PersonsTableContentProps
 * @property {(id: string) => void} onActivate - Function to handle activation of a person.
 * @property {(id: string) => void} onDelete - Function to handle deletion of a person.
 * @property {(id: string) => void} onEdit - Function to handle editing of a person.
 * @property {Person[]} persons - Array of persons to display in the table.
 */

type PersonsTableContentProps = {
  onActivate: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  persons: Person[];
};
export const PersonsTableContent = ({
  onActivate,
  onDelete,
  onEdit,
  persons,
}: PersonsTableContentProps) => {
  return (
    <TableBody>
      {persons.map((person) => (
        <TableRow
          key={person.id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            backgroundColor: person.active ? "white" : "#ffbaba",
          }}
        >
          <TableCell>{person.id}</TableCell>
          <TableCell>{person.lastName}</TableCell>
          <TableCell>{person.jobTitle}</TableCell>
          <TableCell>{person.birthDate}</TableCell>
          <TableCell>{person.active ? "✅" : "❌"}</TableCell>
          <TableCell>
            <Button variant="outlined" onClick={() => onActivate(person.id)}>
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
              onClick={() => onEdit(person.id)}
              sx={{ marginLeft: 2 }}
            >
              {"Edit"}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
