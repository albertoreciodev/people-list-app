import { TableCell, TableHead, TableRow } from "@mui/material";

const personsTableHeader = [
  "Name",
  "Last name",
  "Job title",
  "Birth date",
  "Active",
  "Action",
];

export const PersonsTableHeader = () => {
  return (
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
  );
};
