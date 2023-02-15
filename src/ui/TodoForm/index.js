import React from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css'

function TodoForm(props) {
  const navigate = useNavigate()

  //stado del texarea es un string vacio
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '')

  //cada que se escrive
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  //buton cancelar
  const onCancel = () => {
    //cierra el modal
    navigate('/')
  }
  //buton enviar
  const onSubmit = (event) => {
    //cancela recargar la pagina
    event.preventDefault();
    //le enviamos el nuevo texto
    props.submitEvent(newTodoValue)
    navigate('/')
  }
  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Make dinner"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {props.submitText}
        </button>
      </div>
    </form>

  )
}

export { TodoForm };