import React from 'react'

const showTodoList = (todos,showFinished,setTodos) => {
  
  
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
  
  return (
        <div>
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

                <div className={item.isCompleted ? " line-through " : "px-4 "}>
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
  )
}

export default showTodoList
