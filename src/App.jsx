import TodoInput from "./components/elements/TodoInput";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div className="w-[500px] shadow-[0px_0px_7px_1px_rgba(0,0,0,0.25)] p-5 m-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        ToDo List Redux
      </h1>
      <TodoInput />
      <Layout />
    </div>
  );
}

export default App;
