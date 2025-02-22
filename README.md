# Desafío Minexus

### Objetivo

Crear un formulario interactivo en React o Vue que permita al usuario seleccionar país, estado/provincia y ciudad usando una api externa o simulada. Además, el formulario debe incluir otros campos básicos de datos personales.
El sitio va a ser internacional, por lo cual debe contar con la opción de cambiar de idioma, debe estar disponible en ingles y español.

### Requisitos

Estructura del Formulario

- País: Selector que lista todos los países obtenidos desde la API.
- Estado/Provincia: Selector dependiente del país seleccionado que muestra los estados o provincias del país elegido.
- Ciudad: Selector dependiente del estado/provincia seleccionado, mostrando las ciudades de la región correspondiente.
- Otros campos básicos:
- Nombre completo (campo de texto, obligatorio).
- Correo electrónico (campo de texto, obligatorio, validación de formato).
- Dirección (campo de texto, opcional).
- Botones de acción: "Guardar" y "Cancelar".

Al hacer clic en guardar se debe mostrar un modal con los datos seleccionados para que confirme si están correctos.

Una vez enviado el formulario mostrar al usuario que los datos se enviaron de forma correcta.

El idioma debe ser persistente, si se vuelve a ingresar al sitio debe estar en el ultimo idioma que fue seleccionado.

Se debe hacer uso de GIT.

El sitio debe tener header y footer.

Es importante usar un framework como Boostrap o Tailwind.

Se recomienda agregar un alto grado de personalización en el diseño.

Se recomienda usar alguna librería para validar que todos los datos se hayan ingresado y que sean validos para el tipo de dato que se esta ingresando.

API utilizada para la obtencion de países/provincias/ciudades https://countriesnow.space

## Resolución

Autor: Ignacio Orellano

### Ejecutar proyecto

El proyecto usa vite, para correr la aplicación ejecute los siguientes comandos:

- `npm install`
- `npm run dev`
