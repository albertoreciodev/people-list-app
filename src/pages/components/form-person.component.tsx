import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Persons } from "@/persons";

type FormPersonProps = {
  onCreate: (person: Persons) => void;
};

export const FormPerson = ({ onCreate }: FormPersonProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No controlado
    const newPerson = {
      id: Number(event.currentTarget.id.value),
      name: event.currentTarget.name.value,
      lastName: event.target.lastName.value,
      jobTitle: event.target.jobTitle.value,
      birthDate: event.target.birthDate.value,
      active: event.target.active.checked,
    };

    onCreate(newPerson);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "row", gap: "10px" }}
    >
      <TextField
        id="id"
        name="id"
        label="ID"
        type="text"
        variant="outlined"
        sx={{ width: "100px" }}
      />

      <TextField
        id="name"
        name="name"
        label="Name"
        type="text"
        variant="outlined"
      />

      <TextField
        id="lastName"
        name="lastName"
        label="Last name"
        type="text"
        variant="outlined"
      />
      <TextField
        id="jobTitle"
        name="jobTitle"
        label="Job title"
        type="text"
        variant="outlined"
      />
      <TextField
        id="birthDate"
        name="birthDate"
        //label="Birth date"
        type="date"
        variant="outlined"
      />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox name="active" />}
          labelPlacement="start"
          label="Active"
        />
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >{`Create new user`}</Button>
    </form>
  );
};
