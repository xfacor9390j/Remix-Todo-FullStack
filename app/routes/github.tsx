import { Button } from "@nextui-org/react";
import { Form } from "@remix-run/react";

// app/routes/login.tsx
export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Form action="/auth/github" method="post">
        <Button type="submit" className="w-full m-4" variant="solid">Login with GitHub!</Button>
      </Form>
    </div>
  );
}
