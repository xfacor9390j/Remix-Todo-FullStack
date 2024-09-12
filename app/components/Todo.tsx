import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { Form } from "@remix-run/react";
import EditModalForm from "./EditModalForm";
interface Todo {
  id: string;
  title: string;
  description: string;
}
export default function Todo({title, description,id}: Todo) {
  return (
    <>
      <Card className=" text-white bg-matte-black" >
        <CardHeader className="flex gap-3 font-bold justify-center"><h3>{title}</h3></CardHeader>
        <Divider className="bg-white" />
        <Divider className="bg-white" />
        <CardBody className=" gap-3">
          <div className="flex justify-center"><p>{ description}</p></div>
        </CardBody>
        <Divider className="bg-white"/>
        <Divider className="bg-white" />
        <CardFooter className="flex justify-around"> 
          <Form action={`/delete/${id}`} method="post">
              <Button type="submit" variant='solid'>Delete</Button>
          </Form>
          <EditModalForm title={title } description={description} id={id} />
        </CardFooter>
      </Card>
    </>
  );
}
