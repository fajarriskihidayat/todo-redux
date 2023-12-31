import { useEffect, useState } from "react";
import TodoInput from "./components/elements/TodoInput";
import Layout from "./components/layouts/Layout";

function App() {
  const [id, setId] = useState(0);
  const [data, setData] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    document.title = "ToDo Redux";
  }, []);

  return (
    <div className="w-[500px] max-[500px]:shadow-none shadow-[0px_0px_7px_1px_rgba(0,0,0,0.25)] p-5 m-auto my-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        ToDo List Redux
      </h1>
      <TodoInput
        data={data}
        setData={setData}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        id={id}
      />
      <Layout
        data={data}
        setData={setData}
        setIsEdit={setIsEdit}
        setId={setId}
      />
    </div>
  );
}

export default App;
