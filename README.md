Reto Kuepa 11-07-2020

Servidor: Nodejs Base de datos: Mysql

Para instalar:

Crear una base de datos: nodelogin y ejecutar archivo nodelogin.sql
Descomprimir el archivo auth.zip (Este ya tiene todas las dependencias)
Si se requiere importar las dependencias son: npm install socket.io npm install express npm install express-session npm install mysql
Para levar el servidor ejecutar en cmd: node login.js

Funcionalidades del software

-Valida login y contraseña ante la Base de datos Mysql
-Si la validación es correcta, ingresa al chat creado con Node, HTML5, CSS
-Pueden ingresar tantos usuarios como se validen al servidor.
-El chat identifica fecha, hora y nombre de la persona que envia los mensajes.
