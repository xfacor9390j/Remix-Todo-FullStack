// components/TodosContainer.tsx

import Todo from "./Todo";
import { TodoType } from "~/utils/types.server";
interface TodosContainerProps {
  todos: TodoType[];
}
export default function TodosContainer({ todos }: TodosContainerProps) {
  return (
    <>
      <div className="  p-10 grid grid-cols-1 gap-y-8  place-content-center items-center sm:grid-cols-2  sm:gap-5 md:grid-cols-4 md:gap-8 ">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </>
  );
}
