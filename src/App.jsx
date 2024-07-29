import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import showTodoList from "./components/showTodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoList = localStorage.getItem("TodoList");
    if (todoList) {
      let saved = JSON.parse(localStorage.getItem("TodoList"));
      setTodos(saved);
    }
  }, []);

  const saveToLocal = (todos) => {
    localStorage.setItem("TodoList", JSON.stringify(todos));
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);

    saveToLocal(newTodos);
  };

  const handleEdit = (e, id) => {
    let editText = todos.filter((i) => i.id === id);
    setTodo(editText[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLocal;
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];

    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocal();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAdd = () => {
    const newTodo = { id: uuidv4(), todo, isCompleted: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
    saveToLocal(newTodos);
  };

  const toggleFinished = (e) => {
    setShowFinished(!showFinished);
    console.log(showFinished, "showFinished");
  };

 

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-12  bg-violet-100 min-h-screen ">
        <div className=" w-[80%] mx-auto border ">
          <div className="addTodo ">
            <h2 className="text-lg font-bold text-center">Add a Todo</h2>

            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Add a Todo"
              className="w-full rounded-lg border my-4 p-2"
            />

            <button
              disabled={todo.length <= 3}
              className="bg-violet-800 hover:bg-violet-950 disabled:bg-fuchsia-500 p-3 py-2 text-white rounded-md font-bold w-full  "
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <input
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
          />{" "}
          SHOW COMPLETED
          <h2 className="text-lg font-bold">Your Todos</h2>
          {todos.length === 0 && (
            <div className="text-center my-5">Nothing To Display....</div>
          )}
          {todos?.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex justify-between w-full my-8 "
                >
                  <div className="flex gap-5">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                  </div>

                  <div
                    className={item.isCompleted ? " line-through " : "px-4 "}
                  >
                    {item.todo}
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      className="bg-violet-800 hover:bg-violet-950 p-3 py-2 text-white rounded-md mx-2 font-bold"
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-violet-800 hover:bg-violet-950 p-3 py-2 text-white rounded-md mx-2 font-bold"
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            );
          })}
          
        </div>
      </div>
    </>
  );
}

export default App;
