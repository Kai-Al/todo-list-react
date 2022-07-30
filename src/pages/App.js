import { TodoCounter } from "../components/todoCounter/TodoCounter";
import { TodoSearch } from "../components/todoSearch/TodoSearch";
import { TodoList } from "../components/todoList/TodoList";
import { TodoItem } from "../components/todoItem/TodoItem";
import { CreateTodoButton } from "../components/createTodoButton/CreateTodoButton";

const todos = [
  { text: "Learn JavaScript", completed: false },
  { text: "Learn HTML", completed: false },
  { text: "Learn CSS", completed: false },
]



function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
