import { render, screen } from "@testing-library/react";
import Main from "../Main";
import AppState from "../../../context/app-state/AppState";
import userEvent from "@testing-library/user-event";

describe("user actions", () => {
  test("initial length should be 6", () => {
    render(
      <AppState>
        <Main />
      </AppState>
    );
    const elements = screen.getAllByTestId("todo-item");
    expect(elements.length).toEqual(6);
  });

  test("add todo", () => {
    render(
      <AppState>
        <Main />
      </AppState>
    );
    const input = screen.getByTestId("input");
    userEvent.type(input, "react testing library");
    expect(input).toHaveValue("react testing library");
    const button = screen.getByTestId("add-todo");
    userEvent.click(button);
    const newElements = screen.getAllByTestId("todo-item");
    expect(newElements.length).toEqual(7);
  });

  test("delete todo", () => {
    render(
      <AppState>
        <Main />
      </AppState>
    );
    const element = screen.getAllByTestId("todo-item");
    const remove = screen.getAllByTestId("remove-todo");
    userEvent.click(remove[0]);
    const newElements = screen.getAllByTestId("todo-item");
    expect(newElements.length).toEqual(element.length - 1);
  });

  test("mark todo as completed", () => {
    render(
      <AppState>
        <Main />
      </AppState>
    );
    // const completed = screen.getAllByTestId("completed")
    const incomplete = screen.getAllByTestId("incomplete");
    const todo = screen.getAllByTestId("todo");
    userEvent.type(incomplete[0], "true");
    expect(incomplete[0]).toBeChecked();
    expect(todo[0]).toHaveClass("line-through");
  });

  test("mark todo as incomplete", () => {
    render(
      <AppState>
        <Main />
      </AppState>
    );
    const complete = screen.getAllByTestId("completed");
    userEvent.click(complete[0]);
    const todo = screen.getAllByTestId("todo")
    expect(todo[0]).not.toHaveClass("line-through");
  });
});
