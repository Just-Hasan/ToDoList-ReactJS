import React, { useState } from "react";
import "../styles/app.css";

/////////////////////////////////////[Component]
import ListContainer from "./ListContainer";
import Input from "./Input";
import List from "./List";

/////////////////////////////////////[Context Variable]
export const AppContext = React.createContext();

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

  const contextValues = {
    list,
    setList,
    onDeleteToDoList: handleDeleteToDoList,
    onCheckToDoList: handleCheckToDoList,
    onEditToDoList: handleEditToDoList,
  };

  return (
    <AppContext.Provider value={contextValues}>
      <div className="app-container">
        <form className="to-do-container" onSubmit={handleSubmit}>
          <Input />
          <ListContainer
            todo={todo}
            onHandleClearList={handleClearList}
            onHandleDoneList={handleDoneList}
          >
            <List />
          </ListContainer>
        </form>
      </div>
    </AppContext.Provider>
  );
}
