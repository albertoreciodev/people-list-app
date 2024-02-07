// 	GET method returns the person with the given ID.
// 	PATCH method updates a person’s attribute/s and returns the person.
// 	DELETE method deletes a person with the given ID and returns it.

import { NextApiRequest, NextApiResponse } from "next";
import { usePersonsApi } from "@/server-data/domain/use-persons-api.hook";


export const getPersons = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { persons } = usePersonsApi();
  return persons;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {


  const persons = getPersons()


  if (req.method === 'GET') {
    const personId = await req.body;
    const result = persons.map((person) => {
      if (person.id === personId) {
        return { ...person, active: !person.active };
      } else {
        return person;
      }
    })
    return res.status(200).json(result)   
  } 


  if (req.method === 'PATCH') {
    const body = req.body;
    const personUpdate = await req.body;
    const personUpdateId = await req.body.id;

    const result = persons.map((person) => {
      if (person.id === personUpdateId) {
        return { ...person, ...personUpdate}
      } else {
        return person;
      }
    })  

    return res.status(200).json(result) 
  }
  

  
  if (req.method === 'DELETE') {
    const personId = await req.body;
    const result = persons.filter((person: { id: string; }) => person.id !== personId);
    return res.status(200).json(result)
  }


  return res.status(405).end();

}

export default handler;
