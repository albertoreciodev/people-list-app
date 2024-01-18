import { TableCell, TableHead, TableRow } from "@mui/material";

const dataHeaderTable = [
  "Name",
  "Last name",
  "Job title",
  "Birth date",
  "Active",
];

export const BasicTableHeader = () => {
  return (
    <TableHead
      sx={(theme) => ({
        color: "white",
        backgroundColor: theme.palette.grey[300],
      })}
    >
      <TableRow>
        {dataHeaderTable.map((data, index) => (
          <TableCell key={index}>{data}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
