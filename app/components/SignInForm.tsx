import { Form, Link } from "@remix-run/react";
import { Button, Input } from "@nextui-org/react";
export default function SignInForm() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Form method="post">
        <div>
            <Input
              label="Name"
              type="string"
              name="name"
              required
              id="Name "
              color="primary"
              className="m-4"
            />
          </div>
          <div>
            <Input
              label="Email"
              type="email"
              name="email"
              required
              color="primary"
              id="email "
              className="m-4"
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              required
              id="password "
              color="primary"
              className="m-4"
            />
          </div>
          
          <div className="flex justify-center m-4">
            already had an account!
            <Link to={"/login"}>
              <span className="text-red-600 px-2 underline">Login</span>
            </Link>
          </div>
          <Button
            type="submit"
            variant="solid"
            color="primary"
            className="w-full m-4"
          >
            signUp
          </Button>
        </Form>
      </div>
    </>
  );
}
