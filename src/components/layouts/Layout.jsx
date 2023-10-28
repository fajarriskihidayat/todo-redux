import React, { useState } from "react";
import { FILTER_LIST } from "./constans";
import ToDoList from "../elements/ToDoList";

const Layout = () => {
  const [isActive, setIsActive] = useState("ALL");

  const handleChange = (filter) => {
    setIsActive(filter);
  };

  return (
    <div>
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
        <ToDoList />
        <ToDoList />
      </div>
    </div>
  );
};

export default Layout;
