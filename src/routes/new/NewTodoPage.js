import React from 'react'
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
const NewTodoPage = () => {
  const { stateUpdaters } = useTodos()
  const { addTodo } = stateUpdaters;
  return (
    <TodoForm
      label='Escibre tu nuevo todo'
      submitText='Añadir'
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export { NewTodoPage }