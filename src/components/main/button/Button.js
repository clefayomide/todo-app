import { useContext, useState } from "react";
import AppContext from "../../../context/app-context/app-context";
import { Todo } from "../../../api";

const Button = ({ input, setinput }) => {
	const { addNewTodo, showError } = useContext(AppContext);
	const [disabled, setDisabled] = useState(false);

	const handleAddTodo = (e) => {
		e.preventDefault();

		if (!input) {
			showError("input cannot be empty");
		} else {
			showError("");
			setDisabled(true);
			const newTodo = {
				userId: localStorage.getItem("id"),
				todo: input,
				complete: false,
			};

			addNewTodo(newTodo).finally(() => {
				setDisabled(false);
				setinput("");
			});
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
