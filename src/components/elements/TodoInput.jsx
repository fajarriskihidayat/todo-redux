import { useDispatch } from "react-redux";

import { ADD_TODO, EDIT_TODO } from "../../redux/slices/todoSlice";

const TodoInput = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!props.isEdit) {
      dispatch(ADD_TODO(props.data));
      props.setData("");
    } else {
      dispatch(EDIT_TODO({ id: props.id, value: props.data }));
      props.setIsEdit(false);
      props.setData("");
    }
  };

  return (
    <div className="flex justify-between py-9">
      <input
        className="w-10/12 bg-gray-200 appearance-none border-2 border-gray-200 rounded-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="inline-full-name"
        type="text"
        placeholder="Masukkan list"
        value={props.data}
        onChange={(e) => props.setData(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300"
        type="button"
        disabled={props.data === "" ? true : false}
        onClick={() => handleClick()}
      >
        {props.isEdit ? "EDIT" : "ADD"}
      </button>
    </div>
  );
};

export default TodoInput;
