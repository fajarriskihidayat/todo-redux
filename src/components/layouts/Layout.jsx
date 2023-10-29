import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FILTER_LIST } from "./constans";
import ToDoList from "../elements/ToDoList";

import { selectTodos } from "../../redux/slices/todoSlice";

const Layout = (props) => {
  const todos = useSelector(selectTodos);
  const [isActive, setIsActive] = useState("ALL");

  const handleChange = (filter) => {
    setIsActive(filter);
  };

  const filterTodos = () => {
    const cloneTodos = [...todos];

    if (isActive === "ALL") {
      return cloneTodos;
    } else if (isActive === "ACTIVE") {
      return cloneTodos.filter((todo) => todo.isChecked === false);
    } else if (isActive === "COMPLETED") {
      return cloneTodos.filter((todo) => todo.isChecked === true);
    }
  };

  return (
    <>
      <div className="text-[18px] font-bold text-blue-500 mb-3">
        Count todo: {todos.length}
      </div>
      <nav>
        <ul className="flex mb-4">
          {FILTER_LIST.map((item, i) => (
            <li
              key={i}
              className={`font-semibold py-2 px-12 cursor-pointer  ${
                isActive === item.name
                  ? "text-blue-600 border-b-2 border-b-blue-600"
                  : "text-gray-400 hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600"
              }`}
              onClick={() => handleChange(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col gap-1">
        <ToDoList
          todos={filterTodos()}
          data={props.data}
          setData={props.setData}
          setIsEdit={props.setIsEdit}
          setId={props.setId}
        />
      </div>
    </>
  );
};

export default Layout;
