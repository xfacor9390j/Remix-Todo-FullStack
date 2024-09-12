// routes/delete.$id.tsx (or in a folder structure routes/delete/$id.tsx)
import { ActionFunction, redirect } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { prisma } from "~/utils/db.server";

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return redirect("/login");
  }
  const todoId = params.id;
  if (!todoId) {
    throw new Error("Todo ID is missing");
  }
  await prisma.todo.delete({
    where: { id: todoId },
  });
  return redirect("/");
};
