import { useRef, useEffect } from "react";
import { Textarea } from "@chakra-ui/textarea";
import ImageItem from "./ImageItem";

export type componentMappings = {
  [key: string]: (content: { src: string; alt: string }) => void;
};

const BuilderItem = ({
  type,
  content,
  updateItem,
  handleKeyPress,
}: {
  type: string | null;
  content: string | { src: string; alt: string };
  updateItem: (newContent: string | { src: string; alt: string }) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}) => {
  const textBox = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textBox.current !== null && !type) textBox.current.focus();
  }, []);

  const componentMappings: componentMappings = {
    img: (content) => <ImageItem {...content} updateItem={updateItem} />,
  };

  return (
    <>
      {!type && typeof content === "string" ? (
        <Textarea
          onKeyPress={handleKeyPress}
          ref={textBox}
          value={content}
          onChange={(e) => updateItem(e.target.value)}
        />
      ) : (
        type && typeof content !== "string" && componentMappings[type](content)
      )}
    </>
  );
};

export default BuilderItem;
