import { PersonsPage } from "@/persons/ui/persons-page.component";
import { PersonsTable } from "./components/persons-table.component";
import { Typography, Box } from "@mui/material";
import createPerson from "@/persons/domain/person.helper";

export default function Page() {
  return (
    <>
      <PersonsPage />
    </>
  );

  // return (
  //   <Box padding={2}>
  //     <Typography variant="h5" marginBottom={2}>
  //       {`Create an application to show a persons's list`}
  //     </Typography>
  //     <PersonsTable />
  //   </Box>
  // );
}
// para el refactor el app no, el index.tsx de la carpeta pages solo debe importar y exportar por defecto la página, que estará definida en otro fichero,

// luego en el componente PersonsPage o como se llame, debe cargar solo 2 componentes, y el hook, a no ser que quieras añadir mas cosas como un wrapper para dar estilos, o el título o lo que sea
