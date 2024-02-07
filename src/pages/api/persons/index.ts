
import { NextApiRequest, NextApiResponse } from "next";

// 	GET method returns an array of persons.
// 	POST method creates a person and returns it, with the new ID.


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

 debugger;
  if (req.method === 'POST') {
    debugger;
      const body = req.body;
      return res.status(200).json(body) 
   
  } 

  if (req.method === 'GET') {
    debugger;
      const body = req.body;
      return res.status(200).json(body) 
  }


  return res.status(400).json({error: 'The method not exist'})

}