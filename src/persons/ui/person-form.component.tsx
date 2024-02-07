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
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Person } from "@/server-data/domain/person.type";
import { createPerson } from "@/server-data/domain/person.helper";

type PersonFormProps = {
  onAddPerson: (person: Person) => void;
  selectedPerson: Person | null;
  onUpdatePerson(personId: string, person: Partial<Person>): void;
  onSelect: (person: Person | null) => void;
};

export const PersonForm = ({
  onAddPerson,
  onUpdatePerson,
  onSelect,
  selectedPerson,
}: PersonFormProps) => {
  const [dataForm, setDataForm] = useState<Person>(() => createPerson());

  useEffect(() => {
    selectedPerson !== null ? setDataForm(selectedPerson) : createPerson();
  }, [selectedPerson, setDataForm]);

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
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/persons", {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      //alert("Add person successfully");
      //setPersons(response);
    } catch (err) {
      console.error(err);
      //alert("We can't added the person, try again later?");
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
            value={dataForm.active}
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
