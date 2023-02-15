import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {

  const {
    item: todos, //renombrar
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', [])//se puede cambiar a v2

  const [searchValue, setSearchValue] = React.useState('');

  //para ver cuantos toso tenemos en el array
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //filtrar la cantidad de todos dependiendo del valor de searchVaalues
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      //convertir a minuscula la db
      const todoText = todo.text.toLowerCase();
      //convertir a minuscula el value del input
      const searchText = searchValue.toLowerCase();
      //si incluye lo que escribamos en el input
      return todoText.includes(searchText);
    });
  }


  //funcion para editar todos y se guarda
  const addTodo = (text) => {
    const id = newTodoId(todos);
    //creamos una copioa de todos
    const newTodos = [...todos]
    //crea un nuevo todo incompleta
    newTodos.push({
      completed: false,
      text,
      id,
    });
    //actualizar estado
    saveTodos(newTodos);
  }

  //obtener el texto del todo
  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    return todos[todoIndex]
  }

  //funcion para editar todos
  const completeTodo = (id) => {
    //buscar el index si todotext es igual al textinput
    const todoIndex = todos.findIndex(todo => todo.id === id);
    //creamos una copioa de todos
    const newTodos = [...todos]
    //encontrar la posicion index dentro de la lista de todos y que de ese objeto que nos esta llamando completed es igual a true
    newTodos[todoIndex].completed = true;
    //actualizar estado
    saveTodos(newTodos);
  }
  //funcion para editar todos
  const editTodo = (id, newText) => {
    //buscar el index si todotext es igual al textinput
    const todoIndex = todos.findIndex(todo => todo.id === id);
    //creamos una copioa de todos
    const newTodos = [...todos]
    //encontrar la posicion index dentro de la lista de todos y que de ese objeto que nos esta llamando completed es igual a true
    newTodos[todoIndex].text = newText;
    //actualizar estado
    saveTodos(newTodos);
  }


  //funcion para Eliminar todos
  const deleteTodo = (id) => {
    //buscar el index si todotext es igual al textinput
    const todoIndex = todos.findIndex(todo => todo.id === id);
    //creamos una copioa de todos
    const newTodos = [...todos]
    //en que posicion cortar y cuantas tajadas coratar
    newTodos.splice(todoIndex, 1)
    //actualizar estado
    saveTodos(newTodos);
  }


  const states = {//indicar cual es el estado que vamos a compartir en todos los componentes que esta conteniendo
    //propiedades del estado
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    getTodo,
  };

  const stateUpdaters = {//indicar cual es el estado que vamos a compartir en todos los componentes que esta conteniendo
    //actualizadores
    setSearchValue,
    addTodo,
    completeTodo,
    editTodo,
    deleteTodo,
    sincronizeTodos
  };

  return { states, stateUpdaters }
}

//funcion para crear id
function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }
  //recorremos la lista creando un nuevo array con map devolviendo el id
  const idList = todoList.map(todo => todo.id)
  //busca el numero mas grande del i y le sumamos 1
  const idMax = Math.max(...idList)
  return idMax + 1;
}

export { useTodos };
