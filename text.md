## intalar temporalmente las herramientas para ejecutarlas, ejecutar alguna funcion y luego borrarlas, esto permite tener la ultima version actualizada de la herramineta que querramos ejecutar
 npx create-react-app <nameCarpeta>
## provar el proyecto
 cd intro-react
 npm start

 ## eventos
 onClick: funcion de click
 onChange: escucha cada ves que cambie el texto de nuestro endpoint
 onMouseOver: activar una accion cuando pase el mous

 ## para ver los commit similar a git log con una interfas grafica
 gitk


 #####################33
 ## para guardar en localstorage 
 primero convertir de objeto en string con el metodo 

const ejemplo = JSON.stringify([{text: 'todo', coppleted: false}])

## para recuperarlo convertirlo en objeto

JSON.parse(ejemplo)

## agregarlo al local storage

localStorage.setItem('ejemplotodo', ejemplo)

## traer de localstorage

JSON.parse(localStorage.getItem('ejemplotodo'))


###
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },]; 
undefined
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

##### #########################################333
## cambiar nombre de master a main
git branch -m main

## fucionar remote a local
 git remote add origin <link-git-hub>

## para forsar la sincronizacion
  git pull origin main --allow-unrelated-histories

## borrar rama main estando en la rama master 
git branch -d main

## ver ramas
git branch

## crear ramas
git branch <nameRama>

## moverse de main a master
git checkout master

## merge de main estando en master
git merge main


###### ###################3
Para hacer deploy en git hub pages 
modificar el pakage.json

## colocar el nombre de tu proyecto en 
  "name": "*38-todo-machine*",
  "homepage": "https://RodrigoLaime.github.io/*search-movies*"

  "deploy": "gh-pages-clean gh-pages -d build"

## ejecutar 
nmp run deploy

## luego modificar en pakage.json
"deploy": "gh-pages -d build"
## ejecutar 
nmp run deploy


#### ########## ########################

1.
??Cu??ndo necesitamos un router en React.js?
Cuando nuestra interfaz se vuelve lo suficientemente compleja como para necesitar que separemos los componentes en vistas y rutas.
2.
??Cu??l es el comando de NPM para instalar la versi??n 6 de React Router DOM (incluso si ya salieron otras versiones ahora o en el futuro)?

npm i -S react-router-dom@6

3.-1
??Cu??l de las siguientes opciones es una ventaja de utilizar routers como React Router?
Todas las respuestas son correctas.
REPASAR CLASE
4.
??En qu?? tipo de render solo descargamos una vez el HTML de nuestra app desde el servidor, pero con el resto de navegaciones los cambios se hacen por medio de JavaScript en el navegador?
Client-side render

5.-2
El client-side routing es m??s r??pido para la primera carga, pero el server-side routing es mucho m??s r??pido para la navegaci??n.
Verdadero
REPASAR CLASE
6.
Los cambios entre versiones de React Router DOM son dr??sticos. Es muy dif??cil y poco recomendable pasar de una versi??n a otra.
Falso
7.-3
??C??mo React Router usa React Context?
Debemos encapsular nuestra aplicaci??n en un componente provider (que en todas las versiones se llama Routes) para que React Router sepa qu?? componente renderizar o no dependiendo de la ruta en la que nos encontremos.
REPASAR CLASE
8.-6
??Usando React Router c??mo podemos agregar un componente que se renderice siempre sin importar en qu?? ruta nos encontremos (e.j. Men??)?
Agregando el componente general dentro de alg??n componente Route, pero por fuera del componente Provider.
REPASAR CLASE
9.-4
Todas las versiones de React Router DOM son compatibles con cualquier versi??n de React.js.
Verdadero
REPASAR CLASE
10.
??Qu?? tipo de router nos agrega un /#/ al principio de nuestras rutas?

HashRouter

11.-5
Tu backend no soporta varias rutas dentro de la aplicaci??n, solo podemos renderizar un archivo index.html. ??Qu?? tipo de router usar??as para soportar navegaci??n?
Si no tenemos control sobre el backend, no podemos usar React Router.
REPASAR CLASE
12.
??Cu??l es la diferencia entre Link y NavLink en React Router DOM 6?
NavLink nos permite recibir una funci??n con la propiedad isActive para asignar clases o estilos diferentes si estamos en la ruta que coincide con la propiedad to de nuestros enlaces. Link no soporta este comportamiento.

13.
??Qu?? son las rutas din??micas?
Rutas que siempre renderizan la misma vista o estructura base, pero con peque??as diferencias en el contenido gracias a informaci??n de la URL.
14.
??Qu?? React Hook de React Router DOM 6 nos permite navegar entre rutas de la aplicaci??n sin componentes como Link o NavLink?
useNavigate

15.
??Qu?? pasa si agregamos un componente Route dentro de otro componente Route en React Router DOM 6?
El componente Route "madre" se renderizar?? en los paths de ambas rutas. Adem??s, el componente Route "hijo" se renderizar?? en su respectivo path donde el Route "madre" lo haya definido gracias al componente Outlet.
REGRESAR