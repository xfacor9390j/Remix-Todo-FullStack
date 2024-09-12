import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
export const action: ActionFunction = async ({ request }) => {
  return authenticator.logout(request, {
    redirectTo: "http://localhost:5173/login",
  }); // Redirect to the login page after logout
};
export const loader: LoaderFunction = async () => {
  return redirect("http://localhost:5173/login");
};
export function Logout() {
  return <>hello</>;
}
