import { Person } from "@/persons"
import createPerson from "./person.helper"

export default function createPersonsList (): Person[] {  

  return [  
    createPerson('Jorge', 'Ramirez', 'Backend developer', '22/11/1982'),
    createPerson('Sebastián', 'Velázquez', 'Systems Admin & Developer', '07/08/1986'),
    createPerson('Alberto', 'Recio', 'Frontend Developer', '22/11/1983'),
    createPerson('Xevi', 'Serrat', 'Frontend Developer', '28/05/1986'),
    createPerson('Christian', 'Feldermann', 'Head of Technology', '01/01/1974')  
  ] 
  
} 
