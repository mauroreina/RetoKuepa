# kuepa
Reto Kuepa 11-07-2020

Servidor: Nodejs
Base de datos: Mysql

Para instalar: 

1. Crear una base de datos: `nodelogin` y ejecutar archivo nodelogin.sql
2. Descomprimir el archivo auth.zip (Este ya tiene todas las dependencias)
3. Se requiere importar las dependencias:
  npm install socket.io
  npm install express
  npm install express-session
  npm install mysql
4. Para levar el servidor ejecutar en cmd: node login.js

Funcionalidades del software

1. Valida login y contraseña ante la Base de datos Mysql
2. Si la validación es correcta, ingresa al chat creado con Node, HTML5, CSS
3. Pueden ingresar tantos usuarios como se validen al servidor.
4. El chat identifica fecha, hora y nombre de la persona que envia los mensajes.

