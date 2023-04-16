import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Modal } from "./index";
import ReactDOM from "react-dom";

describe("<Modal />", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });
  test("Se renderiza el modal", () => {
   render(<Modal>Hello World!</Modal>);
  });
});
