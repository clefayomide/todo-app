import AppContext from "../app-context/app-context";
import { useReducer, useEffect, useState, useCallback } from "react";
import appReducerFunc from "../app-reducer/app-reducer";
import {
	ADD_TODO,
	COMPLETED_TODO,
	DELETE_TODO,
	CLEAR_COMPLETED,
	EMPTY_INPUT,
	REORDER_TODO,
	INIT_TODO,
} from "../app-actions/action";
import { Todo } from "../../api";

const AppState = ({ children }) => {
	const initialState = {
		todos: [],
		error: "",
	};
	const [state, dispatch] = useReducer(appReducerFunc, initialState);

	const fetchAllTodos = useCallback(() => {
		const todo = new Todo();
		todo
			.getAllTodo(localStorage.getItem("id"))
			.then((res) => dispatch({ type: INIT_TODO, payload: res.data }))
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		fetchAllTodos();
	}, [fetchAllTodos]);

	// add todo
	const addNewTodo = (todo) =>
		new Promise(async (resolve, reject) => {
			const todoClass = new Todo();
			await todoClass
				.addTodo(todo)
				.then((response) => {
					dispatch({ type: ADD_TODO, payload: response.data });
					resolve();
				})
				.catch(() => reject());
		});

	// delete todo
	const deleteTodo = (id) =>
		new Promise(async (resolve, reject) => {
			const todoClass = new Todo();
			await todoClass
				.deleteTodo(id)
				.then((response) => {
					dispatch({ type: DELETE_TODO, payload: id });
					resolve(response);
				})
				.catch((error) => reject(error));
		});

	// completed todo
	const completedTodo = (todoId, data) =>
		new Promise(async (resolve, reject) => {
			const todoClass = new Todo();
			await todoClass
				.updateTodo(todoId, data)
				.then(() => {
					dispatch({ type: COMPLETED_TODO, payload: todoId });
					resolve();
				})
				.catch(() => reject());
		});
	//  {
	// };

	// clear completed todo
	const clearCompletedTodo = (value) => {
		dispatch({ type: CLEAR_COMPLETED, payload: value });
	};

	// error msg
	const showError = (msg) => {
		dispatch({ type: EMPTY_INPUT, payload: msg });
	};

	// reorderTodo
	const reorderTodo = (newOrder) => {
		dispatch({ type: REORDER_TODO, payload: newOrder });
	};

	return (
		<AppContext.Provider
			value={{
				todos: state.todos,
				error: state.error,
				addNewTodo,
				deleteTodo,
				completedTodo,
				clearCompletedTodo,
				showError,
				reorderTodo,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppState;
