# API REST Express MongoDB

Una API REST desarrollada con Express.js y MongoDB como parte del ejercicio de tutoría para la cohorte 3 de JavaScript.

## 📋 Descripción

Esta aplicación es una API REST que permite gestionar usuarios utilizando las siguientes tecnologías:

- **Express.js**: Framework web para Node.js
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB
- **dotenv**: Gestión de variables de entorno
- **ESLint**: Herramienta de análisis de código estático

## 🚀 Funcionalidades

- ✅ Crear usuarios (POST)
- ✅ Obtener todos los usuarios (GET)
- ✅ Obtener usuario por ID (GET)
- 🔄 Actualizar usuarios (en desarrollo)
- 🔄 Eliminar usuarios (en desarrollo)

## 📁 Estructura del Proyecto

```
api-rest-express/
├── models/
│   └── user.js          # Modelo de usuario con Mongoose
├── routes/
│   └── userRoutes.js    # Rutas de la API para usuarios
├── index.js             # Archivo principal de la aplicación
├── package.json         # Dependencias y scripts
├── eslint.config.mjs    # Configuración de ESLint
└── README.md           # Documentación del proyecto
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- MongoDB (local o MongoDB Atlas)
- Git

### Pasos de Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/dev-senior-estudiantes/api-rest-express-mongo.git
   cd api-rest-express-mongo
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Crear un archivo `.env` en la raíz del proyecto:

   ```env
   MONGO_URI=mongodb://localhost:27017/api-rest-express
   PORT=3000
   ```

4. **Ejecutar la aplicación:**

   **Modo desarrollo (con nodemon):**

   ```bash
   npm run dev
   ```

   **Modo producción:**

   ```bash
   npm start
   ```

5. **Verificar funcionamiento:**

   La aplicación estará disponible en: `http://localhost:3000`

## 📚 API Endpoints

### Usuarios

| Método | Endpoint     | Descripción                | Cuerpo de la solicitud                    |
| ------ | ------------ | -------------------------- | ----------------------------------------- |
| GET    | `/users`     | Obtener todos los usuarios | -                                         |
| GET    | `/users/:id` | Obtener usuario por ID     | -                                         |
| POST   | `/users`     | Crear nuevo usuario        | `{ "name": "string", "email": "string" }` |

### Ejemplos de uso

**Crear usuario:**

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan Pérez", "email": "juan@example.com"}'
```

**Obtener todos los usuarios:**

```bash
curl -X GET http://localhost:3000/users
```

**Obtener usuario por ID:**

```bash
curl -X GET http://localhost:3000/users/[USER_ID]
```

## 🔄 GitFlow Workflow

Este proyecto utiliza GitFlow como estrategia de ramificación para mantener un desarrollo organizado y colaborativo.

### Ramas Principales

- **`main`**: Rama principal con código estable en producción
- **`develop`**: Rama de desarrollo con las últimas características

### Ramas de Apoyo

- **`feature/`**: Para nuevas funcionalidades

  - Ejemplo: `feature/add-user-update`
  - Ejemplo: `feature/add-user-delete`

- **`release/`**: Para preparar nuevas versiones

  - Ejemplo: `release/v1.1.0`

- **`hotfix/`**: Para correcciones urgentes en producción
  - Ejemplo: `hotfix/fix-user-validation`

### Flujo de Trabajo

1. **Para nuevas funcionalidades:**

   ```bash
   # Crear rama feature desde develop
   git checkout develop
   git pull origin develop
   git checkout -b feature/nombre-funcionalidad

   # Desarrollar la funcionalidad
   git add .
   git commit -m "feat: agregar nueva funcionalidad"

   # Push y crear Pull Request hacia develop
   git push origin feature/nombre-funcionalidad
   ```

2. **Para correcciones:**

   ```bash
   # Crear rama hotfix desde main
   git checkout main
   git pull origin main
   git checkout -b hotfix/descripcion-fix

   # Aplicar corrección
   git add .
   git commit -m "fix: corregir problema específico"

   # Push y crear Pull Request hacia main y develop
   git push origin hotfix/descripcion-fix
   ```

### Convenciones de Commits

Seguimos la convención de [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de errores
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan funcionalidad)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

## 🧹 ESLint Configuration

### ¿Qué es ESLint?

ESLint es una herramienta de análisis de código estático que ayuda a:

- Identificar y corregir problemas en el código JavaScript
- Mantener un estilo de código consistente
- Detectar errores potenciales antes de la ejecución
- Seguir mejores prácticas de desarrollo

### Configuración Actual

El proyecto utiliza ESLint v9 con la configuración flat config (`eslint.config.mjs`):

```javascript
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    ignores: ["node_modules", "env"],
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
```

### Características de la Configuración

1. **Archivos objetivo**: `**/*.{js,mjs,cjs}` - Analiza todos los archivos JavaScript
2. **Configuración base**: `js/recommended` - Utiliza las reglas recomendadas de ESLint
3. **Entorno**: `globals.node` - Configurado para desarrollo en Node.js
4. **Ignorados**: `node_modules` y `env` - Excluye carpetas que no deben analizarse
5. **Tipo de módulo**: `commonjs` - Para archivos `.js` usando require/module.exports

### Scripts de ESLint

En `package.json` tenemos configurado:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### Uso de ESLint

**Ejecutar análisis de código:**

```bash
npm run lint
```

**Corregir automáticamente errores simples:**

```bash
npx eslint . --fix
```

### Beneficios en el Proyecto

- **Calidad de código**: Detecta errores de sintaxis y lógica
- **Consistencia**: Mantiene un estilo uniforme en todo el equipo
- **Mejores prácticas**: Sugiere patrones recomendados de JavaScript/Node.js
- **Integración CI/CD**: Se puede integrar en workflows de GitHub Actions

## 📦 Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo producción
- `npm run dev`: Ejecuta la aplicación en modo desarrollo con nodemon
- `npm run lint`: Ejecuta ESLint para análisis de código
- `npm test`: Placeholder para tests (por implementar)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Autores

- **Tutor Carlos García** _Cohorte 3 JavaScript_ - _Desarrollo inicial_ - [dev-senior-estudiantes](https://github.com/dev-senior-estudiantes)

## 🔗 Enlaces Útiles

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [ESLint Documentation](https://eslint.org/)
- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
