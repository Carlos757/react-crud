# react-crud

Realizado con tecnologías/librerías como lo son:

-   [Vite](https://vitejs.dev/)
-   [React.js](https://es.reactjs.org/)
-   [Material-UI](https://mui.com/)
-   [React-Router-Dom](https://reactrouter.com/)
-   [Loopback](https://loopback.io/doc/index.html)
-   [Day.Js](https://day.js.org/)

## Instalación

Posicionarse en la carpeta raíz y ejecutar los siguientes comandos para ejecuta la aplicación de manera local:

## Frontend:

```
cd front
npm install
npm run dev
```

## Backend:

```
cd backend
npm install
nodemon
```
- Crear una BD en servidor MySql con el script de la carpeta BD
- Modificar el archivo datasources.development.json en la carpeta server con tu conexión
```
"mysql": {
    "name": "mysql",
    "host": "localhost",
    "port": 3306,
    "database": "simple_crud",
    "user": "root",
    "password": "NhhqM7REE8Noje",
    "connector": "mysql"
  }
```
- Una vez conectado a la BD deberia dar una salida como esta:
<img width="569" alt="Captura de pantalla 2023-09-18 a la(s) 11 18 51 p m" src="https://github.com/Carlos757/react-crud/assets/43733991/9554853d-c0ef-4b4f-998b-59529855d41e">
