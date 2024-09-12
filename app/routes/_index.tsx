import {
  json,
  LoaderFunction,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { authenticator } from "../utils/auth.server";
import Nav from "../components/Nav";
import TodosContainer from "../components/TodosContainer";
import EditModalForm from "../components/EditModalForm";
import { prisma } from "~/utils/db.server";
import { TodoType } from "~/utils/types.server";
import { useLoaderData } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return redirect("/login");
  }
  const todos: TodoType[] = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
  });

  return json({ todos });
};
export default function Index() {
  const { todos }: { todos: TodoType[] } = useLoaderData();
  return (
    <>
      <Nav />
      
      <TodosContainer todos={todos} />
      
    </>
  );
}
