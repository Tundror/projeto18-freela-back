import { db } from "../database/database.connection.js";

export async function getHotels(req, res) {
    try {
        const hotels = await db.query(`SELECT
        h.id,
        h.name,
        h.day_price,
        c.name AS city,
        h.breakfast,
        h.pool,
        h.towel,
        h.image,
        h.description,
        h.air
      FROM
        hotels h
      JOIN
        cities c ON h.city = c.id;`)
        res.status(200).send(hotels.rows)

    } catch (err) {
        res.status(500).json(err.message);
    }
}

export async function getHotelsById(req, res) {
  const id = parseInt(req.params.id);
  try {
    const hotels = await db.query(`
      SELECT
        h.id,
        h.name,
        h.day_price,
        c.name AS city,
        h.breakfast,
        h.pool,
        h.towel,
        h.image,
        h.description,
        h.air
      FROM
        hotels h
      JOIN
        cities c ON h.city = c.id
      WHERE c.id = $1;
    `, [id]);
    res.status(200).send(hotels.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function getHotelsByTheirId(req, res) {
  const id = parseInt(req.params.id);
  try {
    const hotels = await db.query(`
      SELECT
        h.id,
        h.name,
        h.day_price,
        c.name AS city,
        h.breakfast,
        h.pool,
        h.towel,
        h.image,
        h.description,
        h.air
      FROM
        hotels h
      JOIN
        cities c ON h.city = c.id
      WHERE h.id = $1;
    `, [id]);
    res.status(200).send(hotels.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export async function insertHotel(req, res) {
  try {
    const {
      name,
      dayPrice,
      city,
      breakfast,
      pool,
      towel,
      image,
      description,
      air,
    } = req.body;

    const query = `
      INSERT INTO hotels (name, day_price, city, breakfast, pool, towel, image, description, air)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;

    const values = [
      name,
      dayPrice,
      city,
      breakfast,
      pool,
      towel,
      image,
      description,
      air,
    ];
    const result = await db.query(query, values);

    res.status(200).send(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
}