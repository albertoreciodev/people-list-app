import {
  Button,
  Box,
  FormGroup,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material/";

import {
  ChangeEvent,
  FormEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
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
  const [dataForm, setDataForm] = useState<Person>(() => createPerson());

  useEffect(() => {
    selectedPerson !== null ? setDataForm(selectedPerson) : createPerson();
  }, [selectedPerson]);

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

    if (selectedPerson === null) {
      onAddPerson(dataForm);
      setDataForm(() => createPerson());
    } else {
      onUpdatePerson(dataForm.id, dataForm);
      setDataForm(() => createPerson());
    }
  };

  const textButtonPerson =
    selectedPerson === null ? "Create new person" : "Edit person";

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
            value={(e: SyntheticEvent<Element, Event>) =>
              dataForm.active ? e.target.checked : null
            }
            onChange={(e: SyntheticEvent<Element, Event>, checked: boolean) =>
              setDataForm((prevDataForm) => ({
                ...prevDataForm,
                active: checked,
              }))
            }
          />
        </FormGroup>

        <Button variant="contained" color="primary" type="submit">
          {textButtonPerson}
        </Button>
      </Box>
    </>
  );
};
