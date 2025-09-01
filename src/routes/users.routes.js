import { Router } from "express";

import { getUser, getUsers, createUser, deleteUser } from "../db.js";
const router = Router();

router.get("/", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await getUser(req.params.id);
  res.send(user);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser(name, email);
  res.status(201).send(user);
});

router.delete("/:id", async (req, res) => {
  const result = await deleteUser(req.params.id);
  res.send(result);
});

export default router;
