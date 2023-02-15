import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function EditTodoPage() {
  const location = useLocation();
  const params = useParams()
  //convertimos de string a numeros
  const id = Number(params.id)

  const { states, stateUpdaters } = useTodos()
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdaters;

  let todoText;


  if (location.state?.todo) { //si tenemos algo le pasamos
    todoText = location.state.todo.text
  } else if (loading) {//si no verificar si esta cargando
    return <p>Cargando...</p>
  } else { //si no esta cargando, pasmos desde getTodo
    const todo = getTodo(id)
    todoText = todo.text
  }

  return (
    <TodoForm
      label='Edita tu todo'
      defaultTodoText={todoText}
      submitText='Editar'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage }