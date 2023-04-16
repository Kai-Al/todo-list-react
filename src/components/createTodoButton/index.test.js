import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { CreateTodoButton } from "./index";
import { screen } from "@testing-library/dom";

describe("<CreateTodoButton />", () => {
  test("Se renderiza el botón", () => {
    render(<CreateTodoButton />)
    screen.getByText("+");
  });
  test("El botón llama la función de hacer click", () => {
    const mockSetOpenModal = jest.fn();
    render(<CreateTodoButton setOpenModal = {mockSetOpenModal}/>)
    const button = screen.getByText("+");
    fireEvent.click(button);
    expect(mockSetOpenModal).toHaveBeenCalledTimes(1);
  });
});
