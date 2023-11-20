import { useState } from "react";
import { LuPencil, LuTrash } from "react-icons/lu";

/////////////////////////////////////[List Component]

export function List({
  todoItems,
  onDeleteToDoList,
  onCheckToDoList,
  onEditToDoList,
}) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");

  return (
    <li className="todo-list-activity">
      {edit ? (
        // Edit Mode Active
        <div className="todo-list-edit">
          <input
            value={editText}
            type="text"
            className="todo-list-edit-text"
            placeholder="Edit List"
            onChange={(e) => setEditText(e.target.value)}
          ></input>
          <button
            className="todo-list-edit-button"
            onClick={() => {
              onEditToDoList(todoItems.id, editText);
              setEdit(() => !edit);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <span
          className={`todo-list-text ${todoItems.check ? "list-checked" : ""}`}
        >
          {todoItems.description}
        </span>
      )}
      <div className="todo-list-actions">
        <input
          type="checkbox"
          className="custom-checkbox"
          onChange={() => {
            onCheckToDoList(todoItems.id);
          }}
        ></input>
        <button
          onClick={() => {
            setEdit(() => !edit);
          }}
        >
          <LuPencil className="todo-edit" />
        </button>
        <button onClick={() => onDeleteToDoList(todoItems)}>
          <LuTrash className="todo-delete" />
        </button>
      </div>
    </li>
  );
}
