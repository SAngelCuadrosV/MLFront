# MercadoLibre - FrontEnd
[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)
[![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger)

> El proyecto en mención está realizado con React.js. Sirve como template para conocer el funcionamiento de los componentes de React, su integración con SASS, manejo de llamados API con Axios, direccionamiento con el History y template de la ReduxStore.

---

## Tabla de Contenido

- [Estado](#estado)
- [Prerequisitos](#prerequisitos)
- [Instalación](#installation)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)
- [TODO](#todo)
- [Autor](#autor)


---

## Estado

- Para una referencia completa del Estado y documentación del proyecto: https://drive.google.com/file/d/1mYuZJjBaeTaRTluPqwk_zbqe5_gJc_ez/view?usp=sharing 

---

### Prerequisitos

Para poder utilizar el proyecto se debe contar con las siguientes herramientas y permisos:

- GIT: Herramienta que permitirá descargar la aplicación del repositorio: https://git-scm.com/downloads, instalación: https://www.youtube.com/watch?v=Wfe4jL21iPs
- Node
- Visual Studio Code (Editor de Código recomendado)
- BackEnd relacionado con este proyecto, adjunto en el siguiente enlace: https://github.com/SAngelCuadrosV/MLBack.

---

### Instalación

- 👯 Clonar este repositorio en su máquina local: `git clone https://github.com/SAngelCuadrosV/MLFront.git`.
- A través de la línea de comandos, ir a la ruta donde se clonó el proyecto e instalar las librerías del proyecto con el comando:
```shell
$ npm install
```

- Abrir el proyecto con Visual Studio.

---

### Desarrollo

Se recomienda seguir la estructura de carpetas y estándares indicados en el documento del Manual del Desarrollador: https://drive.google.com/file/d/1mYuZJjBaeTaRTluPqwk_zbqe5_gJc_ez/view?usp=sharing

---

### Despliegue

> Realizar el build optimizado del proyecto con node, ejecutando en la raíz del proyecto el comando
```shell
$ npm run build
```

> En la carpeta raíz quedará una carpeta con el nombre build, la cual contiene los archivos optimizados que se deben montar al servidor.
> Según el tipo de servidor, consultar el manual adecuado para su correcto despliegue.
---

### TODO

- Al ampliar la aplicación con nuevas funcionalidades que requieran el manejo del Store, se debe utilizar el template base generado.
- De ser necesario persistir el store, manejar un persistor para que al momento de refrescar no se pierda el estado actual.

---

### Autor

* **Sebastian Cuadros Vanegas** - *Desarrollo de la receta* - Ingeniero de Software