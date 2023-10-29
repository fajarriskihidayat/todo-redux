import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { DELETE_TODO, UPDATE_CHECKED_TODO } from "../../redux/slices/todoSlice";

const ToDoList = (props) => {
  const dispatch = useDispatch();

  const todos = props.todos;

  const handleEditTodo = (item) => {
    props.setData(item.value);
    props.setId(item.id);
    props.setIsEdit(true);
  };

  const handleDeleteTodo = (item) => {
    dispatch(DELETE_TODO(item));
  };

  const handleChecked = (item) => {
    dispatch(UPDATE_CHECKED_TODO(item));
  };

  return (
    <>
      {todos &&
        todos.map((todo, i) => (
          <div
            className="flex justify-between px-4 py-2 bg-blue-500 hover:bg-blue-600"
            key={i}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-8 h-8 accent-white text-blue-500"
                readOnly
                checked={todo.isChecked}
                onClick={() => handleChecked(todo)}
              />
              <div className="flex flex-col">
                <span
                  className={`text-white text-sm ${
                    todo.isChecked ? "line-through" : ""
                  }`}
                >
                  Created: {todo.created}
                </span>
                <span
                  className={`text-white text-lg ${
                    todo.isChecked ? "line-through" : ""
                  }`}
                >
                  {todo.value}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold p-2.5 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => handleEditTodo(todo)}
              >
                <FaPen />
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold p-2.5 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => handleDeleteTodo(todo)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ToDoList;
