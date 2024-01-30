import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { Person } from "../domain/person.type";
import { createPerson } from "../domain/person.helper";

type PersonFormProps = {
  onAddPerson: (person: Person) => void;
  selectedPerson: Person | null;
  onUpdatePerson(personId: string, person: Partial<Person>): void;
};

export const PersonForm = ({
  onAddPerson,
  onUpdatePerson,
  selectedPerson,
}: PersonFormProps) => {
  const emptyPerson = createPerson();
  const [dataForm, setDataForm] = useState<Person>(emptyPerson);
  //if (selectedPerson && selectedPerson !== null) setDataForm(selectedPerson);

  /**
   * Handles the change event of an input element.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event object.
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setDataForm((prevDataForm) => ({ ...prevDataForm, [name]: value }));
  };

  /**
   * Handles the form submission event.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event object.
   * @returns {void}
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //onAddPerson(dataForm);
    //setDataForm(emptyPerson);
    if (selectedPerson === null) {
      onAddPerson(dataForm);
    } else {
      onUpdatePerson(dataForm.id, dataForm);
    }
    setDataForm(emptyPerson);
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "25px",
        }}
      >
        <TextField
          id="id"
          name="id"
          label="ID"
          type="text"
          variant="outlined"
          sx={{ width: "100px" }}
          value={dataForm.id}
          onChange={handleChange}
          disabled
        />

        <TextField
          id="firstName"
          name="firstName"
          label="First name"
          type="text"
          variant="outlined"
          value={dataForm.firstName}
          onChange={handleChange}
        />

        <TextField
          id="lastName"
          name="lastName"
          label="Last name"
          type="text"
          variant="outlined"
          value={dataForm.lastName}
          onChange={handleChange}
        />
        <TextField
          id="jobTitle"
          name="jobTitle"
          label="Job title"
          type="text"
          variant="outlined"
          value={dataForm.jobTitle}
          onChange={handleChange}
        />
        <TextField
          id="birthDate"
          name="birthDate"
          type="date"
          variant="outlined"
          value={dataForm.birthDate}
          onChange={handleChange}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Active"
            name="active"
            value={dataForm.active}
            ///onChange={(e) => console.log("checkbox", e.target.checked)}
            onChange={(e: SyntheticEvent<Element, Event>, checked: boolean) =>
              setDataForm((prevDataForm) => ({
                ...prevDataForm,
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
      </Box>
    </>
  );
};
