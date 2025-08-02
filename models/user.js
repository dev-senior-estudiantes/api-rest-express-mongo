// models/user.js

const mongoose = require("mongoose");

// Definir el esquema del usuario
const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Aqui le digo que es obligtorio
  },
  email: {
    type: String,
    require: true,
    unique: true, // Aqui le digo que s correo unico
  },
});

// Creamos el modelo basado en el esquema
const User = mongoose.model("User", userShema);

module.exports = User;
