import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Persons } from "../../persons";
import TableBody from "@mui/material/TableBody";
import { Button } from "@mui/material/";

type PersonsTableContentProps = {
  onActivate: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  persons: Persons[];
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
