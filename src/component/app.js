import { useState } from "react";
import "../styles/app.css";

/////////////////////////////////////[Component]
import ListContainer from "./ListContainer";
import Input from "./Input";

export default function App() {
  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);

  /////////////////////////////////////[Handler Function]
  function handleAddToDoList(newTodo) {
    setTodo((currentList) => [...currentList, newTodo]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!list) return;
    const newToDo = {
      description: list,
      id: Date.now(),
      edit: false,
      check: false,
    };
    handleAddToDoList(newToDo);
    setList(() => "");
  }

  function handleDeleteToDoList(todo) {
    setTodo((previoustodo) =>
      previoustodo.filter((todoItem) => todoItem !== todo)
    );
  }

  function handleCheckToDoList(id) {
    setTodo((currentList) =>
      currentList.map((list) =>
        list.id === id ? { ...list, check: !list.check } : list
      )
    );
  }

  function handleEditToDoList(id, newText) {
    setTodo((currentList) =>
      currentList.map((list) =>
        list.id === id ? { ...list, description: newText } : list
      )
    );
  }

  /////////////////////////////////////[Sorting items functionality]
  function handleClearList() {
    setTodo(() => []);
  }

  function handleDoneList() {
    setTodo((currentList) => currentList.filter((list) => list.check !== true));
  }

  return (
    <div className="app-container">
      <form className="to-do-container" onSubmit={handleSubmit}>
        <Input list={list} setList={setList} />
        <ListContainer
          todo={todo}
          onDeleteToDoList={handleDeleteToDoList}
          onCheckToDoList={handleCheckToDoList}
          onEditToDoList={handleEditToDoList}
          onHandleClearList={handleClearList}
          onHandleDoneList={handleDoneList}
        />
      </form>
    </div>
  );
}
