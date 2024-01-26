import TextField from "@mui/material/TextField";
import { Button } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Persons } from "@/persons";
import { SyntheticEvent, useState } from "react";

type FormPersonProps = {
  onCreate: (person: Persons) => void;
};

export const FormPerson = ({ onCreate }: FormPersonProps) => {
  const [formValuesPerson, setFormValuesPerson] = useState<Persons>({
    id: 0,
    name: "",
    lastName: "",
    jobTitle: "",
    birthDate: "",
    active: false,
  });

  // Form No controlado
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // No controlado
  //   const newPerson = {
  //     id: Number(event.currentTarget.id.value),
  //     name: event.currentTarget.name.value,
  //     lastName: event.target.lastName.value,
  //     jobTitle: event.target.jobTitle.value,
  //     birthDate: event.target.birthDate.value,
  //     active: event.target.active.checked,
  //   };

  //   onCreate(newPerson);
  // };

  // Form Controlado
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValuesPerson((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onCreate(formValuesPerson);
    setFormValuesPerson({
      id: 0,
      name: "",
      lastName: "",
      jobTitle: "",
      birthDate: "",
      active: false,
    });
  };

  return (
    <>
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
          value={formValuesPerson.id}
          onChange={handleChange}
        />

        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          variant="outlined"
          value={formValuesPerson.name}
          onChange={handleChange}
        />

        <TextField
          id="lastName"
          name="lastName"
          label="Last name"
          type="text"
          variant="outlined"
          value={formValuesPerson.lastName}
          onChange={handleChange}
        />
        <TextField
          id="jobTitle"
          name="jobTitle"
          label="Job title"
          type="text"
          variant="outlined"
          value={formValuesPerson.jobTitle}
          onChange={handleChange}
        />
        <TextField
          id="birthDate"
          name="birthDate"
          //label="Birth date"
          type="date"
          variant="outlined"
          value={formValuesPerson.birthDate}
          onChange={handleChange}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Active"
            name="active"
            value={formValuesPerson.active}
            ///onChange={(e) => console.log("checkbox", e.target.checked)}
            onChange={(e: SyntheticEvent<Element, Event>, checked: boolean) =>
              setFormValuesPerson((formValuesPerson) => ({
                ...formValuesPerson,
                active: checked,
              }))
            }
          />
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >{`Create new user`}</Button>
      </form>
    </>
  );
};
