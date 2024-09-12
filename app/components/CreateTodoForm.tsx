import { Button, Input, Textarea } from "@nextui-org/react";
import { Form } from "@remix-run/react";

export default function CreateTodoForm() {
  return (
    <>
      <div>
        <Form method="post">
          <Input label="title"
            required
            color="primary"
            name="title"
            className="my-4"
          />
          <Textarea
            label="description"
            required
            name="description"
            className="my-4"
            color="primary"
          />
          <Button fullWidth className="my-4" type="submit">Add</Button>
        </Form>
      </div>
    </>
  );
}
