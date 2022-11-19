import { useContext } from "react";
import cross from "../../../assets/icon-cross.svg";
import AppContext from "../../../context/app-context/app-context";
import { Draggable } from "react-beautiful-dnd";

const TodoItems = ({ data, index }) => {
  const { todo, id, complete } = data;
  const { deleteTodo, completedTodo } = useContext(AppContext);

  return (
    <>
      <Draggable key={todo.id} draggableId={`${id}`} index={index}>
        {(provided) => (
          <div
            data-testid="todo-item"
            className="flex justify-between items-center h-14 pl-5 pr-5 border-b border-solid border-slate-300"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              className={`w-8 h-8 rounded-full ${
                !complete
                  ? "border border-solid border-blue-500 dark:border-darkGrayishBlue"
                  : ""
              }`}
            >
              {!complete ? (
                <input
                  type="checkbox"
                  data-testid="incomplete"
                  className="w-full h-full cursor-pointer opacity-0"
                  value={complete}
                  onChange={() => completedTodo(id)}
                />
              ) : (
                <div className="w-full h-full rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-full h-full text-blue-500 bi bi-check2-circle cursor-pointer"
                    viewBox="0 0 16 16"
                    data-testid="completed"
                    onClick={() => completedTodo(id)}
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                </div>
              )}
            </div>
            <p
              data-testid="todo"
              className={`w-4/5 md:w-5/6 pl-2 text-black ${
                complete
                  ? "line-through dark:text-darkGrayishBlue"
                  : "dark:text-lightGreyishBlue"
              }`}
            >
              {todo}
            </p>
            <img
              src={cross}
              alt="cancel button"
              className="h-5 cursor-pointer"
              onClick={() => deleteTodo(id)}
              data-testid="remove-todo"
            />
          </div>
        )}
      </Draggable>
    </>
  );
};

export default TodoItems;
