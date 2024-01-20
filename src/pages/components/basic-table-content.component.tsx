import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { initialData, initialDataProps } from "../../initial-data";
import TableBody from "@mui/material/TableBody";
import { useState } from "react";
import Button from "@mui/material/Button";

export const BasicTableContent = () => {
  const [datas, setDatas] = useState<initialDataProps[]>(initialData);

  const handleChangeActivate = (id: number) => {
    setDatas(
      datas.map((data) => {
        if (data.id === id) {
          return { ...data, active: !data.active };
        } else {
          return data;
        }
      })
    );
  };

  return (
    <TableBody>
      {datas.map((data) => (
        <TableRow
          key={data.id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            backgroundColor: data.active ? "white" : "#ffbaba",
          }}
        >
          <TableCell>{data.id}</TableCell>
          <TableCell>{data.lastName}</TableCell>
          <TableCell>{data.jobTitle}</TableCell>
          <TableCell>{data.birthDate}</TableCell>
          <TableCell>{data.active ? "✅" : "❌"}</TableCell>
          <TableCell>
            <Button
              variant="outlined"
              onClick={() => handleChangeActivate(data.id)}
            >
              {data.active ? "Desactivate" : "Activate"}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
