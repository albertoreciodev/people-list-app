import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Person } from "@/persons";
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";

/**
 * @typedef {Object} FormPersonProps
 * @property {(person: Person) => void} onCreate - Callback function invoked when a new person is created.
 *   - @param {Person} person - The person object representing the newly created person.
 */
type PersonFormProps = {
  onAddPerson: (person: Person) => void;
  dataForm: Person;
  newPerson: Person;
  onUpdateForm: (person: Person) => void;
  onNewPerson: (person: Person) => void;
};

export const PersonForm = ({
  dataForm,
  newPerson,
  onAddPerson,
  onUpdateForm,
  onNewPerson,
}: PersonFormProps) => {
  /**
   * Handles the change event of an input element.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event object.
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const field = {
      [name]: value,
    };
    //setNewPerson((prevNewPerson) => ({ ...prevNewPerson, [name]: value }));
    //onNewPerson([...dataForm, field]);
  };

  /**
   * Handles the form submission event.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event object.
   * @returns {void}
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onAddPerson(newPerson);
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
              setNewPerson((prevNewPerson) => ({
                ...prevNewPerson,
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
