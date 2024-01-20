import { BasicTable } from "./components/basic-table.component";
import { Typography, Box } from "@mui/material";

export default function Page() {
  return (
    <Box padding={2}>
      <Typography variant="h5" marginBottom={2}>
        {`Create an application to show a list of people`}
      </Typography>
      <BasicTable />
    </Box>
  );
}
