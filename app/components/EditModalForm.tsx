import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Input,
} from "@nextui-org/react";
import { Form } from "@remix-run/react";
import { useState } from "react";

interface Todo {
  id: string;
  title: string;
  description: string;
}
export default function EditModalForm({
  title: initialTitle,
  description: initialDescription,
  id,
}: Todo) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <Button
        variant="solid"
        onPress={() => handleOpen()}
        className="capitalize"
      >
        Edit
      </Button>

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <div>
                <Form method="post" action={`/edit/${id}`}>
                  <Input
                    label="title"
                    required
                    color="primary"
                    name="title"
                    className="p-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Textarea
                    label="description"
                    required
                    name="description"
                    className="p-3"
                    color="primary"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className=" flex justify-center">
                    <Button
                      className="m-3"
                      type="submit"
                      onPress={onClose}
                    >
                      Edit
                    </Button>
                  </div>
                </Form>
              </div>
              <ModalFooter className="flex justify-center">
                <Button  variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
