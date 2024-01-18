import * as React from "react";
import { Table, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import { BasicTableContent } from "./basic-table-content.component";
import { BasicTableHeader } from "./basic-table-header.component";

export const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="list of people">
        <BasicTableHeader />
        <BasicTableContent />
      </Table>
    </TableContainer>
  );
};
