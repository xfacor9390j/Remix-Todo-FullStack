import LoginForm from "~/components/LoginForm";
import { authenticator } from "../utils/auth.server";
export async function action({ request }: { request: Request }) {
  return authenticator.authenticate("form", request, {
    successRedirect: "http://localhost:5173",
    failureRedirect: "http://localhost:5173/login",
  });
}
export default function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}
