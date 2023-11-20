/////////////////////////////////////[Input Component]
export default function Input({ list, setList }) {
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
