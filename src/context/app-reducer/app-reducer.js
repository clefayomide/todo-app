import {
	ADD_TODO,
	DELETE_TODO,
	COMPLETED_TODO,
	CLEAR_COMPLETED,
	EMPTY_INPUT,
	REORDER_TODO,
	INIT_TODO,
} from "../app-actions/action";

const appReducerFunc = (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.todoId !== action.payload),
			};
		case COMPLETED_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.todoId === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};
		case INIT_TODO:
			return {
				...state,
				todos: action.payload,
			};
		case CLEAR_COMPLETED:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.complete !== action.payload),
			};
		case EMPTY_INPUT:
			return {
				...state,
				error: action.payload,
			};
		case REORDER_TODO:
			return {
				...state,
				todos: action.payload,
			};
		default:
			return state;
	}
};

export default appReducerFunc;
