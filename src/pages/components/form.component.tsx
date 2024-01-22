import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import { useEffect, useState } from "react";
import { initialData, initialDataProps } from "@/initial-data";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Form = () => {
  // Valores de la API - Que vienen del fichero initial data
  const [dataForm, setDataForm] = useState<initialDataProps[]>(initialData);
  // Valores del form que capturo
  const [formValuesUser, setFormValuesUser] = useState({
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
      name: event.currentTarget.name.value,
      lastName: event.currentTarget.lastName.value,
      jobTitle: event.currentTarget.jobTitle.value,
      birthDate: event.currentTarget.birthDate.value,
      active: event.currentTarget.active.checked,
    };

    setFormValuesUser(submitDataForm);
    setDataForm([...dataForm, submitDataForm]);

    // Reset form
    const emptyFormValuesUser = {
      name: "",
      lastName: "",
      jobTitle: "",
      birthDate: "",
      active: false,
    };
    setFormValuesUser(emptyFormValuesUser);
  };
  useEffect(() => {
    alert("useEffect");
  }, [dataForm]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "row", gap: "10px" }}
      >
        <TextField
          id="name"
          label="Name"
          type="text"
          variant="outlined"
          defaultValue={formValuesUser.name}
        />

        <TextField
          id="lastName"
          label="Last name"
          type="text"
          variant="outlined"
          defaultValue={formValuesUser.lastName}
        />
        <TextField
          id="jobTitle"
          label="Job title"
          type="text"
          variant="outlined"
          defaultValue={formValuesUser.jobTitle}
        />
        <TextField
          id="birthDate"
          //label="Birth date"
          type="date"
          variant="outlined"
          defaultValue={formValuesUser.birthDate}
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
      <pre>{JSON.stringify(dataForm, null, 4)}</pre>
      <pre>{JSON.stringify(formValuesUser, null, 4)}</pre>
    </>
  );
};
