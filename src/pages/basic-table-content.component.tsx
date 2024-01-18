import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { mockDataList, mockDataListProps } from "../mock-data-list";
import TableBody from "@mui/material/TableBody";

export const BasicTableContent = () => {
  return (
    <TableBody>
      {mockDataList &&
        mockDataList.map((data) => (
          <TableRow
            key={data.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.lastName}</TableCell>
            <TableCell>{data.jobTitle}</TableCell>
            <TableCell>{data.birthDate}</TableCell>
            <TableCell>{data.active ? "✅" : "❌"}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};
