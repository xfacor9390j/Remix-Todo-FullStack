import SignInForm from "~/components/SignInForm";
import { json } from "@remix-run/node";
import { prisma } from "../utils/prisma.server";
import bcrypt from "bcryptjs";
import { redirect } from "@remix-run/react";
import { createUserSession, getUserSession } from "~/utils/session.server";

export async function action({ request }: { request: Request }) {
  const formData = new URLSearchParams(await request.text());
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const password = formData.get("password") || "";

  if (!name || !email || !password) {
    return json({ error: "All fields are required." }, { status: 400 });
  }
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return json({ error: "User already exists." }, { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  console.log(user);
  const userSession = await createUserSession(user.id, request);
  return redirect("http://localhost:5173", {
    headers: {
      "set-cookie": userSession,
    },
  });
}
export async function loader({ request }: { request: Request }) {
  const userId = await getUserSession(request);
  if (userId) {
    return redirect("http://localhost:5173");
  }
  return null;
}
export default function SignUp() {
  return (
    <>
      <SignInForm />
    </>
  );
}
