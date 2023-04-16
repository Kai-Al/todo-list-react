import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { CreateTodoButton } from "./index";
import { screen } from "@testing-library/dom";

describe("El botón de añadir un todo nuevo existe", () => {
  test("Se renderiza el botón", () => {
    render(<CreateTodoButton />)
    screen.getByText("+");
  });
});
