import React from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const ToDoList = () => {
  return (
    <div className="flex justify-between px-4 py-2 bg-blue-500 hover:bg-blue-600">
      <div class="flex items-center gap-2">
        <input type="checkbox" className="w-8 h-8 accent-white text-blue-500" />
        <div className="flex flex-col">
          <span className="text-white text-sm">Created: 20 October 2022</span>
          <span className="text-white text-lg">Playing futsal</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold p-2.5 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          <FaPen />
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold p-2.5 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
