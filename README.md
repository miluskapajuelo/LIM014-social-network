# Woman Coding
Es una Red Social dirigida a mujeres que forman parte de la tecnologia en todo el mundo, donde podrán compartir herramientas, tips, consejos de buenas prácticas, nuevas tecnologías; así como interactuar entre ellas.

Las caraterísticas técnicas de nuestra aplicación son las siguientes:

- Es una Single-Page Application
- Diseñada con un enfoque mobile first (versión traducida)
- Debe permitir la persintencia de datos
- Red Social responsiva en la que podemos escribir, leer, actualizar y eliminar datos.
- Para implementar la aplicación usamos HTML, CCS, Vanilla JavaScript, Firebase

## 1. Prototipos

Inicialmente éste era el prototipo de baja fidelidad:
![logo](https://raw.githubusercontent.com/Katherine-fe/LIM014-social-network/RamaKatherine/src/img/baja.JPG)

Luego trabajamos en los prototipos de alta fidelidad de las diferentes vistas:

* Vista mobile
![logo](https://raw.githubusercontent.com/Katherine-fe/LIM014-social-network/RamaKatherine/src/img/login%20mobile.JPG)

* Vista Desktop

![logo](https://raw.githubusercontent.com/Katherine-fe/LIM014-social-network/RamaKatherine/src/img/login%20desktop.JPG)
![logo](https://raw.githubusercontent.com/Katherine-fe/LIM014-social-network/RamaKatherine/src/img/register%20desktop.JPG)
![logo](https://raw.githubusercontent.com/Katherine-fe/LIM014-social-network/RamaKatherine/src/img/home%20desktop.JPG)


## 2. Definición del producto

### 1.1 Quiénes son los principales usuarios

Esta Plataforma fue diseñada para que mujeres de todas las edades que trabajen, estudien o tengan interes en tecnologia. Mujeres que se dedican a 
divulgación de tendencias en el rubro tecnologico.


### 1.2 Qué problema resuelve el producto / para qué le servirá a estos usuarios.

El producto resuelve la necesidad de encontrar un espacio donde una mujer puede conectarse con otras mujeres directamente y hacer consultas especificas sobre tecnologia. Ademas de encontrar en un solo lugar información relevante que impulse el autoaprendizaje.

### 1.3 Historias de usuario
![logo](https://raw.githubusercontent.com/Katherine-fe/LIM014-social-network/RamaKatherine/src/img/hu.JPG)

### 1.4 Organizacion de las Historias de Usuario
![logo](https://raw.githubusercontent.com/Katherine-fe/LIM014-social-network/RamaKatherine/src/img/issus.JPG)

## 3. Pruebas unitarias (unit tests)


## 4. Entrevistas con usuarios

* Entrevista 01
 
  Perfil:
  - Sexo: Mujer
  - Edad: 25 años
  - Rol: Estudiante Fron-End Developer
  
  Comentario:
  Usuaria visualizo el prototipo de alta fidelidad y nos brindo las siguientes indicaciones:
  - Los botones de post deberian tener un color mas amigable.
  - El registro de un usuario deberia contar con una doble confirmación de contraseña.
  - El campo de Popular Post deberia ser un poco reducido.
  - El texto dentro del boton Log In deberia ser de color blanco.
  - El boton Log Out deberia tener un icono de referencia.

* Entrevista 02

  Perfil:
  - Sexo: Mujer
  - Edad: 24 años
  - Rol: Fron-End Developer
  
  Comentario:
  Usuaria visualizo el prototipo de alta fidelidad y nos brindo las siguientes indicaciones:
  - El campo de publicación deberia visualizarse en la parte superior.
  - En la vista mobile no deberia figurar los Popular Post.
  - Los post deberían indicarme la fecha en el que fue publicado.
  - Los Popular Post deberian resaltar y diferenciarse de las publicaciones generales.


## 5. Testeos de usabilidad

Se realizó el test de usabilidad en 3 usuarios y el resultado mostró lo siguiente:

- Usuario 01:
Se mostro confundido ya que no entendia de que se trataba la aplicación y como podía ayudarlo.

- Usuario 02:
Quedo impresionado con la primera vista ya que noto un mayor orden y los botones eran faciles de identificar. Sin embargo cuando visualizo la segunda vista no entendia que tenia que colocar en el campo "info" al cual se le cambio de nombre a "User Information" para una mejor claridad.

- Usuario 03:
Al realizar todas las modificaciones anteriores, el quinto usuario al que se aplico el test de usabilidad, afirmo que consideraba que teniamos un diseño amigable y entendía perfectamente para que era cada boton que mostrabamos. Lo cual fue respaldado con el tiempo de respuesta al realizar las tareas encomendadas.



## 6. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](../../topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos.**

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [x] [Uso de CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM (addEventListener, removeEventListener,
Event objeto, delegación de eventos)
* [x] [Manipulación dinámica del DOM](
  https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild | createElement | createTextNode | innerHTML | textContent | etc.)
* [x] Implementación de routing ([History API.](
  https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
  ) | `hashchange`)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.
* [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [x] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [x] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [x] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y Github

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |tags)
* [x] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [x] [Firestore.](https://firebase.google.com/docs/firestore)
* [x] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [x] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [x] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.

## 7. Tips y Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

### Otras:

* [Pildora SPA](https://www.loom.com/share/fa63a8ad0e9a43428222c15b6f6613d3)
* [Repositorio de pildora de SPA](https://github.com/betsyvies/bootcamp-spa)
* [Pildora de mock Firebase](https://www.youtube.com/watch?v=06myVn41OTY&t=1s)
* [Repositorio de pildora de mock Firebase](https://github.com/Danielalab/2018-2-Testing)
* [Pildora MVC](https://github.com/merunga/todomvc-vanillajs)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
