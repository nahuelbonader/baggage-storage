# baggage-storage

## 1. Hacer git clone del repositorio https://github.com/nahuelbonader/baggage-storage

## 2. Realizar **npm install** en la consola, parado sobre la carpeta raíz, para instalar las dependencias del proyecto

## 3. Crear una base de datos en PSQL con el nombre que desee, por ejemplo: _baggage-storage_

## 4. Crear en la carpeta raíz un archivo .env con la información siguiente:

    DB_NAME = *insertar nombre de la base de datos creada*
    DB_PORT = *insertar número del puerto donde corre postgres, por defecto es el 5432*
    POSTGRES_USER = *si tiene usuario configurado para la utilización de postgres insertarlo aquí"
    POSTGRES_PASSWORD =  *si tiene contraseña configurada para la utilización de postgres insertarlo aquí"

## 5. Correr **npm run seed** en la consola, parado sobre la carpeta raíz, para seedar la base de datos

## 6. Correr **npm start** en la consola, parado sobre la carpeta raíz, para inicializar el proyecto

## 7. Ya puede utilizar el proyecto. La API se encontrará corriendo en el puerto 3001 y el CLIENT en el puerto 3000.