import { Form, Link } from "@remix-run/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

export default function LoginForm() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <Form method="post">
          <div>
            <Input
              type="email"
              label="Email"
              name="email"
              required
              id="email"
              color="primary"
              className="my-4"
            />
          </div>
          <div>
            <Input
              type="password"
              label="password"
              name="password"
              id="password"
              required
              color="primary"
              className="my-4"
            />
          </div>
          <div className="flex justify-center">
            dont have an account?
            <Link to={"/signup"}>
              <span className="text-red-600 px-2 underline">SignUp</span>
            </Link>
          </div>
          <Button
            className="w-full my-4"
            variant="solid"
            color="primary"
            type="submit"
          >
            login
          </Button>
        </Form>
      </div>
    </>
  );
}
