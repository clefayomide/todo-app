import Input from "./input/Input";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/app-context/app-context";
import TodoItems from "./todo-items/TodoItems";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Main = () => {
  const [index, setIndex] = useState(0);
  const { todos, error, clearCompletedTodo, reorderTodo } =
    useContext(AppContext);
  const [todoState, setTodoState] = useState(todos);

  useEffect(() => {
    setTodoState(todos);
  }, [todos]);

  // sort todos
  const handleSorting = (param, num) => {
    setIndex(num);
    if (param === "all") {
      setTodoState(todos);
    } else {
      const sort = todos.filter((todo) => todo.complete === param);
      setTodoState(sort);
    }
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todoState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    //
    reorderTodo(items);
  }

  return (
    <>
      <div className="relative">
        <Input />
        <div className="bg-white dark:bg-veryDarkBlue shadow-lg rounded-lg mt-5">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <div
                  className="characters w-full"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {todoState.map((todo, index) => (
                    <TodoItems data={todo} index={index} key={todo.id} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="block md:hidden">
            {todoState.length > 0 && (
              <div className="h-14 flex justify-between items-center pl-5 pr-5">
                <p className="text-slate-500">{`${todoState.length} item${
                  todoState.length > 1 ? "s" : ""
                } left`}</p>
                <p
                  className="text-slate-500 cursor-pointer"
                  onClick={() => clearCompletedTodo(true)}
                >
                  Clear Completed
                </p>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <div className="h-14 flex justify-between items-center bg-white dark:bg-veryDarkBlue shadow-lg rounded-lg mt-5 md:mt-0 ml-5 mr-5">
              <p className="text-slate-500">{`${todoState.length} item${
                todoState.length > 1 ? "s" : ""
              } left`}</p>
              <div className="w-1/2 flex justify-center">
                <div
                  className={`${
                    index === 0 ? "text-blue-600" : "text-slate-500"
                  } font-medium cursor-pointer`}
                  onClick={() => handleSorting("all", 0)}
                >
                  All
                </div>
                <div
                  className={`${
                    index === 1 ? "text-blue-600" : "text-slate-500"
                  } font-medium cursor-pointer ml-5`}
                  onClick={() => handleSorting(false, 1)}
                >
                  Active
                </div>
                <div
                  className={`${
                    index === 2 ? "text-blue-600" : "text-slate-500"
                  } font-medium cursor-pointer ml-5`}
                  onClick={() => handleSorting(true, 2)}
                >
                  Completed
                </div>
              </div>
              <p
                className="text-slate-500 cursor-pointer"
                onClick={() => clearCompletedTodo(true)}
              >
                Clear Completed
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="h-14 flex justify-center items-center bg-white dark:bg-veryDarkBlue shadow-lg rounded-lg mt-5">
            <div
              className={`${
                index === 0 ? "text-blue-600" : "text-slate-500"
              } font-medium cursor-pointer`}
              onClick={() => handleSorting("all", 0)}
            >
              All
            </div>
            <div
              className={`${
                index === 1 ? "text-blue-600" : "text-slate-500"
              } font-medium cursor-pointer ml-5`}
              onClick={() => handleSorting(false, 1)}
            >
              Active
            </div>
            <div
              className={`${
                index === 2 ? "text-blue-600" : "text-slate-500"
              } font-medium cursor-pointer ml-5`}
              onClick={() => handleSorting(true, 2)}
            >
              Completed
            </div>
          </div>
        </div>
        <div>
          <p className="w-full absolute -top-10 text-red-500 text-center">
            {error}
          </p>
        </div>
        <p className="w-full text-center text-slate-500 mt-10 font-normal">
          Drag and drop to reorder list
        </p>
      </div>
    </>
  );
};

export default Main;
