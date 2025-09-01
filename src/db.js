import mysql from "mysql2";
import {} from "./config.js";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Flaco.Frey2321!",
    database: "mydb",
  })
  .promise();

export const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
};

export const getUser = async (id) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE id=?", [id]);
  return rows;
};

export const createUser = async (name, email) => {
  const [result] = await pool.query(
    `INSERT INTO users (name, email) 
    VALUES (?, ?)`,
    [name, email]
  );
  const id = result.insertId;
  return { id, name, email };
};

export const deleteUser = async (id) => {
  const [result] = await pool.query("DELETE FROM users WHERE id=?", [id]);
  return result;
};
