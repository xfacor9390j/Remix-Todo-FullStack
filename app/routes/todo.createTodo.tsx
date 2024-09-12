import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import CreateTodoForm from "../components/CreateTodoForm";

import { authenticator } from "../utils/auth.server";

import { prisma } from "../utils/db.server";
export const action =async ({ request }:ActionFunctionArgs) => {
    const formData = new URLSearchParams(await request.text())
    const title = formData.get("title") || '';
    const description = formData.get('description')?.toString() || '';
    if (!title || !description) {
        return json({ error: "All fields are required" }, { status: 400 });
      }
    const user = await authenticator.isAuthenticated(request)
    if (!user || !user.id) {
        return json({ error: "User not authenticated" }, { status: 401 });
      }
    const userId = user?.id;
    await prisma.todo.create({
        data: {

            title,
            description,
            userId,
        }
    })
    
    return redirect('/');
   
}

export default function CreateTodo() {
  return (
      <>
          <div className="flex  justify-center items-center h-screen w-full bg-navyBlue">
              <CreateTodoForm />
              </div>
      </>
  )
}
