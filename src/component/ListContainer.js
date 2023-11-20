import { useState } from "react";
import { List } from "./List";

/////////////////////////////////////[List Container Component]
export default function ListContainer({
  todo,
  onDeleteToDoList,
  onCheckToDoList,
  onEditToDoList,
  onHandleClearList,
  onHandleDoneList,
}) {
  const [sortBy, setSortBy] = useState("all");

  /////////////////////////////////////[Sorting Logic]
  let sortedItems;
  if (sortBy === "all") sortedItems = todo;
  if (sortBy === "done")
    sortedItems = todo.slice().filter((item) => item.check === true);
  if (sortBy === "uncheck")
    sortedItems = todo.slice().filter((item) => item.check === false);

  return (
    <div className="todo-list">
      <h1 className="todo-list-title">TodoList</h1>
      <div className="todo-sorting-buttons">
        <p
          data-value={"all"}
          className="todo-all"
          onClick={(e) => setSortBy(e.target.dataset.value)}
        >
          All
        </p>
        <p
          className="todo-done"
          data-value="done"
          onClick={(e) => setSortBy(e.target.dataset.value)}
        >
          Done
        </p>
        <p
          className="todo-uncheck"
          data-value="uncheck"
          onClick={(e) => setSortBy(e.target.dataset.value)}
        >
          Todo
        </p>
      </div>
      <ul
        className={`todo-list-activities ${
          sortedItems.length === 0 ? "center" : ""
        }`}
      >
        {sortedItems.length === 0 ? (
          <h2>There's nothing here</h2>
        ) : (
          sortedItems.map((todoItems) => (
            <List
              todoItems={todoItems}
              key={todoItems.id}
              onDeleteToDoList={onDeleteToDoList}
              onCheckToDoList={onCheckToDoList}
              onEditToDoList={onEditToDoList}
            />
          ))
        )}
      </ul>
      <div className="todo-list-done-task">
        <button onClick={() => onHandleDoneList()}>Delete Done Task</button>
        <button onClick={() => onHandleClearList()}>Delete All task</button>
      </div>
    </div>
  );
}
