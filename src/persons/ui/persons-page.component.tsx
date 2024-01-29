import { PersonForm } from "./person-form.component";
import { PersonsTable } from "./persons-table.component";
import { usePersonsStore } from "../domain/use-persons-store.hook";

export const PersonsPage = () => {
  const {
    addPerson,
    deletePerson,
    persons,
    selectPerson,
    selectedPerson,
    toggleActive,
    updatePerson,
    dataForm,
    newPerson,
    createNewPerson,
  } = usePersonsStore();

  return (
    <>
      <PersonsTable
        persons={persons}
        onActivate={toggleActive}
        onDelete={deletePerson}
        onSelect={selectPerson}
        selectedPerson={selectedPerson}
        onUpdate={updatePerson}
      />
      <PersonForm
        dataForm={dataForm}
        newPerson={newPerson}
        onAddPerson={addPerson}
        onUpdateForm={updatePerson}
        onNewPerson={createNewPerson}
      />
    </>
  );
};
