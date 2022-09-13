// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


//https://formula-18.p.rapidapi.com/current


import axios from "axios";


export default async function handler(req, res) {
  const data = await fetch(
    `https://www.test.com/api/hello?apiKey=${process.env.API_KEY}`,
  ).then(response => response.json());

  res.json(data); // Send the response
}