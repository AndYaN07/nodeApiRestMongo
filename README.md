# Harry Potter API REST

API RESTful desarrollada en Node.js para gestionar el registro de personajes del universo de Harry Potter. Este proyecto implementa un CRUD completo utilizando una base de datos NoSQL.

## Tecnologías

- **Entorno:** Node.js
- **Framework:** Express.js
- **Base de Datos:** MongoDB
- **ODM:** Mongoose

## Arquitectura y Modelo de Datos

El modelo `Character` cuenta con validaciones estrictas en la base de datos:

- `name`: String (Requerido)
- `house`: String (Enum: Gryffindor, Slytherin, Ravenclaw, Hufflepuff, Ninguna)
- `role`: String (Requerido)
- `patronus`: String (Por defecto: "Desconocido")
- `isStudent`: Boolean (Requerido)
- `isAlive`: String (Requerido. Por defecto "Desconocido")

## Instalación y Uso

1. Clonar el repositorio:

   ```bash
   git clone <https://github.com/AndYaN07/nodeApiRestMongo>
   cd <nodeApiRestMongo>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Poblar la base de datos (Semilla):

   ```bash
   npm run seed
   ```

4. Iniciar el servidor (Modo Desarrollo):
   ```bash
   npm run dev
   ```

## Endpoints Disponibles

La API corre por defecto en `http://localhost:3000`.

| Método     | Endpoint                   | Descripción                                        |
| :--------- | :------------------------- | :------------------------------------------------- |
| **GET**    | `/characters`              | Obtiene la lista completa de personajes            |
| **GET**    | `/characters/id/:id`       | Obtiene un personaje específico por su ID          |
| **GET**    | `/characters/house/:house` | Filtra personajes por casa (ej. Gryffindor)        |
| **POST**   | `/characters`              | Crea un nuevo personaje (Requiere JSON en el body) |
| **PUT**    | `/characters/:id`          | Modifica los datos de un personaje existente       |
| **DELETE** | `/characters/:id`          | Elimina un personaje de la base de datos           |

## Estado del Proyecto

✅ CRUD Completado y testeado con éxito.

## Pruebas con Insomnia

Puedes consultar las capturas de las peticiones realizadas con Insomnia:

👉 📸 [Ver capturas de Insomnia](./screenshots/insomnia/)
