import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export default function Home() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, Im Definitely not an Afghan</Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quidem alias doloribus veniam dolorum quaerat pariatur hic sunt
            corrupti ab?
          </Text>
        </Flex>
      </Stack>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      post: [],
    },
  };
};
