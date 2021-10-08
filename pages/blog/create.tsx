import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Stack } from "@chakra-ui/react";
import BuilderItem from "../../components/Blog/BuilderItem";
import Toolbar from "../../components/Blog/Toolbar";

export interface IPost {
  type: string | null;
  content: string | { src: string; alt: string };
  id: string;
}

const Create = () => {
  const [items, setItems] = useState<IPost[]>([
    { type: null, content: "", id: nanoid() },
  ]);

  const addItem = (
    type: string | null,
    content: string | { src: string; alt: string },
    id: string = nanoid()
  ) => {
    setItems((state) => [...state, { type, content, id }]);
    console.log(items);
  };

  const updateItem = (
    id: string,
    content: string | { src: string; alt: string }
  ) => {
    setItems((state) => {
      const itemIndex = state.findIndex((item) => item.id === id);
      const newState = [...state];
      newState[itemIndex].content = content;
      return newState;
    });
    console.log(items);
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter") addItem(null, "");
  };

  return (
    <div>
      <Stack
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        {items.map((item) => (
          <BuilderItem
            key={item.id}
            type={item.type}
            content={item.content}
            updateItem={(newContent: string | { src: string; alt: string }) =>
              updateItem(item.id, newContent)
            }
            handleKeyPress={handleKeyPress}
          ></BuilderItem>
        ))}
        <Toolbar addItem={addItem} />
      </Stack>
    </div>
  );
};

export default Create;
