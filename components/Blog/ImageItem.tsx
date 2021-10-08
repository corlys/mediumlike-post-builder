import React from "react";
import { useState } from "react";
import { Button, Stack, Input, Image } from "@chakra-ui/react";

const EditImage = ({
  updateItem,
}: {
  updateItem?: (content: string | { src: string; alt: string }) => void;
}) => {
  const [source, setSource] = useState("");
  const [alternate, setAlternate] = useState("");

  const updateImage = () => {
    if (updateItem) updateItem({ src: source, alt: alternate });
  };

  return (
    <>
      <Stack spacing={3}>
        <Input
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Add src"
        />
        <Input
          value={alternate}
          onChange={(e) => setAlternate(e.target.value)}
          placeholder="Add alt"
        />
        <Button onClick={updateImage}>Submit</Button>
      </Stack>
    </>
  );
};

const ImageItem = ({
  src,
  alt,
  updateItem,
}: {
  src: string;
  alt: string;
  updateItem?: (content: string | { src: string; alt: string }) => void;
}) => {
  return (
    <>
      {src && alt ? (
        <Image src={src} align="center" alt={alt} />
      ) : (
        <EditImage updateItem={updateItem} />
      )}
    </>
  );
};

export default ImageItem;
