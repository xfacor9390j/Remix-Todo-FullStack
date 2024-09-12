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

  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  // Optional: Add validation for title and description if needed
  if (!title || !description) {
    throw new Error("Title and description are required.");
  }

  // Check if the todo exists and belongs to the user
  const todo = await prisma.todo.findFirst({
    where: {
      id: todoId,
      userId: user.id,
    },
  });

  if (!todo) {
    throw new Error("Todo not found or unauthorized.");
  }

  // Update the todo with the new values
  await prisma.todo.update({
    where: { id: todoId },
    data: {
      title,
      description,
    },
  });

  return redirect("/");
};
