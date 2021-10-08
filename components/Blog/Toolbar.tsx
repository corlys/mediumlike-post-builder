import { componentMappings } from "./BuilderItem";
import { Button } from "@chakra-ui/button";
import ImageItem from "./ImageItem";

const Toolbar = ({
  addItem,
}: {
  addItem: (
    type: string | null,
    content: string | { src: string; alt: string },
    id?: string
  ) => void;
}) => {
  const componentMappings: componentMappings = {
    img: (content) => <ImageItem {...content} />,
  };
  return (
    <>
      {Object.keys(componentMappings).map((key) => (
        <Button key={key} onClick={() => addItem(key, { src: "", alt: "" })}>
          {key}
        </Button>
      ))}
    </>
  );
};

export default Toolbar;
