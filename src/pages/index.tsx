import { BasicTable } from "./components/basic-table.component";
import { Typography, Box } from "@mui/material";
import { Form } from "./components/form.component";

export default function Page() {
  return (
    <Box padding={2}>
      <Typography variant="h5" marginBottom={2}>
        {`Create an application to show a list of people`}
      </Typography>
      <BasicTable />

      <Typography variant="h5" marginBottom={2} marginTop={5}>
        {`Create a simple form`}
      </Typography>
      <Form />
    </Box>
  );
}
