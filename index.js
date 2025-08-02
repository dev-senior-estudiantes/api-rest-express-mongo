// index.js

// 1 importar librerías
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

// 2 Configuración dotenv para leer.env
dotenv.config();

// 3 Inicializar Express app
const app = express();

// 4 Middleware para permitir recibir los Json
app.use(express.json());

// 5  Usar las rutas importadas ya definidas
app.use("/users", userRoutes); // http://localhost:3000/users

// 6 Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("✅ Conectado a MongoDB");

    // 7 Inicializar el servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error conectando a MongoDB:`, err);
  });
