import { Router } from "express";

import { Person } from "../model/person";

const router = Router();

router.post("/person", async (req, res) => {
  const { name, email } = req.body;
  const person = await Person.query().insert({ name, email });
  res.json(person);
});

router.get("/person", async (req, res) => {
  const persons = await Person.query();
  res.json(persons);
});

router.get("/person/:id", async (req, res) => {
  const person = await Person.query().findById(req.params.id);
  res.json(person);
});

router.put("/person/:id", async (req, res) => {
  const { name, email } = req.body;
  const person = await Person.query()
    .update({ name, email })
    .where({ id: req.params.id });

  res.json("update successful");
});

router.delete("/person/:id", async (req, res) => {
  const person = await Person.query().deleteById(req.params.id);
  res.json("delete successful");
});

export { router as personRouter };
