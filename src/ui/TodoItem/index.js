import React from "react";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <editIcon className="Icon Icon-delete" onEdit={props.onEdit}
      />
      <DeleteIcon className="Icon Icon-delete" onDelete={props.onDelete}
      />
    </li>
  );
}
export { TodoItem };
