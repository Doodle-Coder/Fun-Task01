

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  loadTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodoCompletion,
  toggleShowFinished,
  setCurrentTodo,
  clearCurrentTodo,
} from '../feature/todo/todoSlice';

function Tasks() {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const showFinished = useSelector((state) => state.todos.showFinished);
  const currentTodo = useSelector((state) => state.todos.currentTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim().length > 3) {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const handleEdit = (id) => {
    let editText = todos.find((i) => i.id === id);
    setTodo(editText.todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    dispatch(editTodo({ id, newTodo: '' }));  // Temporarily update the state to remove the todo being edited
    dispatch(setCurrentTodo(editText));
  };

  const handleSaveEdit = () => {
    if (todo.trim().length > 0 && currentTodo) {
      dispatch(editTodo({ id: currentTodo.id, newTodo: todo }));
      setTodo('');
      dispatch(clearCurrentTodo());
    }
  };

  return (
    <>
     
      <div className="container mx-auto pt-12 bg-violet-100 min-h-screen">
        <div className="w-[80%] mx-auto border">
          <div className="addTodo">
            <h2 className="text-lg font-bold text-center">Add a Todo</h2>
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Add a Todo"
              className="w-full rounded-lg border my-4 p-2"
            />
            <button
              disabled={todo.trim().length <= 3}
              className="bg-violet-800 hover:bg-violet-950 disabled:bg-fuchsia-500 p-3 py-2 text-white rounded-md font-bold w-full"
              onClick={currentTodo ? handleSaveEdit : handleAdd}
            >
              {currentTodo ? "Save" : "Add"}
            </button>
          </div>
          <input
            onChange={() => dispatch(toggleShowFinished())}
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
                  className="todo flex justify-between w-full my-8"
                >
                  <div className="flex gap-5">
                    <input
                      name={item.id}
                      onChange={() => dispatch(toggleTodoCompletion(item.id))}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                  </div>
                  <div className={item.isCompleted ? "line-through" : "px-4"}>
                    {item.todo}
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      className="bg-violet-800 hover:bg-violet-950 p-3 py-2 text-white rounded-md mx-2 font-bold"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-violet-800 hover:bg-violet-950 p-3 py-2 text-white rounded-md mx-2 font-bold"
                      onClick={() => dispatch(deleteTodo(item.id))}
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

export default Tasks;
