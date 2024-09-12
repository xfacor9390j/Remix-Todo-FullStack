import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Form, Link } from "@remix-run/react";

export default function Nav() {
  return (
    <>
      <Navbar position="static" className="bg-navColor mb-10 sm:justify-center">
        <div>
          <NavbarBrand>
            <p className="font-bold text-inherit text-white">MyTodo</p>
          </NavbarBrand>
        </div>
        <div>
          <NavbarContent className=" sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link to={"/todo/createTodo"} className="text-white font-bold">
                Add Todo
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
        <div>
          <NavbarContent className=" sm:flex gap-4">
            <Form method="post" action="/logout">
              <Button
                color="primary"
                disableRipple
                variant="solid"
                type="submit"
              >
                logout
              </Button>
            </Form>
          </NavbarContent>
        </div>
      </Navbar>
    </>
  );
}
