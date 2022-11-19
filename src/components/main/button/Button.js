import { useContext } from "react";
import AppContext from "../../../context/app-context/app-context";

const Button = ({ input, setinput }) => {
  const { addTodo, showError } = useContext(AppContext);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!input) {
      showError("input cannot be empty");
    } else {
      showError("");
      const newTodo = {
        id: Math.random(),
        todo: input,
        complete: false,
      };
      addTodo(newTodo);
      setinput("");
    }
  };
  return (
    <>
      <button
        data-testid="add-todo"
        className="text-white border-2 border-solid border-skyBlue rounded-br-md rounded-tr-md bg-skyBlue w-30 md:w-1/5 h-full"
        onClick={handleAddTodo}
      >
        Add todo
      </button>
    </>
  );
};

export default Button;
