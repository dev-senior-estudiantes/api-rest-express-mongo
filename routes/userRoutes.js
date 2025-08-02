const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Crear un usuario (POST /users)
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user); // 201 metodo cuando es creado el usario
  } catch (err) {
    res.status(400).json({ error: err.message }); // 400 cuando es error de cliente me informa
  }
});

// obtener todos los usuarios
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ err: "Usuario no encontrado" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message }); // si tiene un problema de conexión
  }
});

module.exports = router;

// Crear eliminar

// Crear actualizar
