import React from "react";

const TodoInput = () => {
  return (
    <div className="flex justify-between py-9">
      <input
        className="w-10/12 bg-gray-200 appearance-none border-2 border-gray-200 rounded-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="inline-full-name"
        type="text"
        placeholder="Masukkan list"
      />
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
