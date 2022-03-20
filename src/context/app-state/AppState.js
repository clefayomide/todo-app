import AppContext from "../app-context/app-context";
import { useReducer, useEffect } from "react";
import appReducerFunc from "../app-reducer/app-reducer";
import {
  ADD_TODO,
  COMPLETED_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  EMPTY_INPUT,
  REORDER_TODO
} from "../app-actions/action";

const AppState = ({ children }) => {
  const retriveTodos = localStorage.getItem("todo");
  const convertTodosToObject = retriveTodos && JSON.parse(retriveTodos);
  const initialState = {
    todos: convertTodosToObject
      ? convertTodosToObject
      : [
          {
            id: Math.random(),
            todo: "Jog around the park 3x",
            complete: false,
          },
          {
            id: Math.random(),
            todo: "Complete online javascript course",
            complete: false,
          },
          {
            id: Math.random(),
            todo: "10 minutes meditation",
            complete: false,
          },
          { id: Math.random(), todo: "Read for one hour", complete: false },
          {
            id: Math.random(),
            todo: "Pick up groceries",
            complete: false,
          },
          {
            id: Math.random(),
            todo: "Complete Todo App on Frontend Mentor",
            complete: false,
          },
        ],
    error: "",
  };
  const [state, dispatch] = useReducer(appReducerFunc, initialState);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todos));
  }, [state.todos]);

  // add todo
  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  // delete todo
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  // completed todo
  const completedTodo = (id) => {
    dispatch({ type: COMPLETED_TODO, payload: id });
  };

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
        addTodo,
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
