import { useContext } from "react";
import { AppContext } from "./app";
/////////////////////////////////////[Input Component]
export default function Input() {
  const { list, setList } = useContext(AppContext);
  return (
    <div className="todo-input">
      <input
        value={list}
        className="todo-input-field"
        placeholder="New Todo"
        onChange={(e) => setList(() => e.target.value)}
      ></input>
      <button className="todo-input-button">Add new task</button>
    </div>
  );
}
