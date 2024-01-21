import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";
import { initialData, initialDataProps } from "@/initial-data";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Form = () => {
  const [dataForm, setDataForm] = useState<initialDataProps[]>(initialData);
  const [formValuesDefault, setFormValuesDefault] = useState({
    name: "",
    lastName: "",
    jobTitle: "",
    birthDate: "",
    active: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("dataForm", dataForm);
    // Find the last number of Users in dataForm
    const nextDataForm = dataForm.findLast((data) => data.id > 0);
    let nextDataFormId = nextDataForm?.id + 1;

    const submitDataForm = {
      id: nextDataFormId,
      name: event.target.name.value,
      lastName: event.target.lastName.value,
      jobTitle: event.target.jobTitle.value,
      birthDate: event.target.birthDate.value,
      active: event.target.active.checked,
    };
    setDataForm([...dataForm, submitDataForm]);

    // Reset form
    const emptyValues = {
      name: "",
      lastName: "",
      jobTitle: "",
      birthDate: "",
      active: false,
    };
    setFormValuesDefault(emptyValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "row", gap: "10px" }}
    >
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="outlined"
        defaultValue={formValuesDefault.name}
      />
      <TextField
        id="lastName"
        label="Last name"
        type="text"
        variant="outlined"
        defaultValue={formValuesDefault.lastName}
      />
      <TextField
        id="jobTitle"
        label="Job title"
        type="text"
        variant="outlined"
        defaultValue={formValuesDefault.jobTitle}
      />
      <TextField
        id="birthDate"
        //label="Birth date"
        type="date"
        variant="outlined"
        defaultValue={formValuesDefault.birthDate}
      />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox name="active" defaultValue={undefined} />}
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
