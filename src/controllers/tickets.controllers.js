import { db } from "../database/database.connection.js";

export async function getTickets(req, res){
    try {
        const tickets = await db.query(`SELECT
        t.id,
        departure_city.name AS departure_city,
        destination_city.name AS destination_city,
        t.time,
        t.price,
        c.name AS company
      FROM
        tickets t
      JOIN
        cities departure_city ON t.departure_id = departure_city.id
      JOIN
        cities destination_city ON t.destination_id = destination_city.id
      JOIN
        companies c ON t.company_id = c.id;`)
        res.status(200).send(tickets.rows)

    } catch (err) {
        res.status(500).json(err.message);
    }
}

export async function getTicketsById(req, res){
    const id = parseInt(req.params.id)
    try {
        const tickets = await db.query(`SELECT
        t.id,
        departure_city.name AS departure_city,
        destination_city.name AS destination_city,
        t.time,
        t.price,
        c.name AS company
      FROM
        tickets t
      JOIN
        cities departure_city ON t.departure_id = departure_city.id
      JOIN
        cities destination_city ON t.destination_id = destination_city.id
      JOIN
        companies c ON t.company_id = c.id
      WHERE destination_city.id = $1;`, [id])
        res.status(200).send(tickets.rows)

    } catch (err) {
        res.status(500).json(err.message);
    }
}

export async function getTicketsByTheirId(req, res){
  const id = parseInt(req.params.id)
  try {
      const tickets = await db.query(`SELECT
      t.id,
      departure_city.name AS departure_city,
      destination_city.name AS destination_city,
      t.time,
      t.price,
      c.name AS company
    FROM
      tickets t
    JOIN
      cities departure_city ON t.departure_id = departure_city.id
    JOIN
      cities destination_city ON t.destination_id = destination_city.id
    JOIN
      companies c ON t.company_id = c.id
    WHERE t.id = $1;`, [id])
      res.status(200).send(tickets.rows)

  } catch (err) {
      res.status(500).json(err.message);
  }
}