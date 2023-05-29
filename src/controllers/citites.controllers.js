import { db } from "../database/database.connection.js";

export async function getCities(req, res) {
    try {
        const cities = await db.query(`SELECT cities.id, cities.name AS city, states.name AS state
        FROM cities
        INNER JOIN states ON cities.state_id = states.id;`)
        res.status(200).send(cities.rows)

    } catch (err) {
        res.status(500).json(err.message);
    }
}

export async function getCitiesById(req, res) {
    const id = parseInt(req.params.id)
    try {
        const data = await db.query(`SELECT cities.name AS city, states.name AS state
        FROM cities
        INNER JOIN states ON cities.state_id = states.id
        WHERE cities.id = $1;`, [id])
        if (data.rows.length === 0) return res.status(404).send("id nao encontrado")
        res.status(200).send(data.rows)

    } catch (err) {
        res.status(500).json(err.message);
    }
}

export async function insertCity(req, res) {
    try {
      const { name, stateId } = req.body;
  
      const query = `
        INSERT INTO cities (name, state_id)
        VALUES ($1, $2)
        RETURNING *;
      `;
  
      const values = [name, stateId];
      const result = await db.query(query, values);
  
      res.status(200).send(result.rows[0]);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }