import { PersonForm } from "./person-form.component";
import { PersonsTable } from "./persons-table.component";
import { usePersonsStore } from "../domain/use-persons-store.hook";

export const PersonsPage = () => {
  const {
    persons,
    selectedPerson,
    selectPerson,
    addPerson,
    deletePerson,
    updatePerson,
    toggleActive,
  } = usePersonsStore();

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
      />
    </>
  );
};
