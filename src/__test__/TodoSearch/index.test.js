import "@testing-library/jest-dom/extend-expect";
import { TodoSearch } from "../../components/TodoSearch/index";
import { render } from "@testing-library/react";
import { TodoContext } from "../../components/TodoContext";

describe("<TodoSearch />", () => {
  test("Se renderiza la barra de busqueda", () => {
    render(
      <TodoContext.Provider value="Provided Value">
        <TodoSearch />
      </TodoContext.Provider>
    );
  });
});
