import { PersonForm } from "./person-form.component";
import { PersonsTable } from "./persons-table.component";
import { usePersonsApi } from "../../server-data/domain/use-persons-api.hook";

export const PersonsPage = () => {
  const {
    persons,
    selectedPerson,
    selectPerson,
    addPerson,
    deletePerson,
    updatePerson,
    toggleActive,
  } = usePersonsApi();
  return (
    <>
      <PersonsTable
        persons={persons}
        onActivate={toggleActive}
        onDelete={deletePerson}
        onSelect={selectPerson}
      />

      <PersonForm
        onAddPerson={addPerson}
        onUpdatePerson={updatePerson}
        selectedPerson={selectedPerson}
        onSelect={selectPerson}
      />
    </>
  );
};
