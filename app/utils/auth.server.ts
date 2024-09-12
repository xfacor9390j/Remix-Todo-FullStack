import {Authenticator, AuthorizationError} from "remix-auth"
import {sessionStorage} from "./session.server"
import {FormStrategy} from "remix-auth-form"
import { prisma } from './prisma.server'
import bcrypt from "bcryptjs"
import type {User} from "@prisma/client"

const sessionSecret = process.env.SECRET_KEY;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

export const authenticator = new Authenticator<User>(sessionStorage)

const formStrategy = new FormStrategy(async ({form}) => {
  const email = form.get("email") as string
  const password = form.get("password") as string

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    console.log("you entered a wrong email")
    throw new AuthorizationError("Invalid email or password");
  }

  const passwordsMatch = await bcrypt.compare(
    password,
    user.password as string,
  )

  if (!passwordsMatch) {
    throw new AuthorizationError("Invalid email or password");
  }

  return user
})

authenticator.use(formStrategy, "form")

