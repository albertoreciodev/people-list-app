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
type FormPersonProps = {
  onCreate: (person: Person) => void;
};

export const FormPerson = ({ onCreate }: FormPersonProps) => {
  /**
   * State representing the form values for a person.
   *
   * @type {Person}
   */
  const [formValuesPerson, setFormValuesPerson] = useState<Person>({
    id: "",
    firstName: "",
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
  /**
   * Handles the change event of an input element.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event object.
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValuesPerson((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  /**
   * Handles the form submission event.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event object.
   * @returns {void}
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onCreate(formValuesPerson);
    setFormValuesPerson({
      id: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      birthDate: "",
      active: false,
    });
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
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
          value={formValuesPerson.firstName}
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
      </Box>
    </>
  );
};
