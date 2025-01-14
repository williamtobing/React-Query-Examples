import {
  Box,
  Code,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
// import Link from "next/link";
import Head from "next/head";
import React, { ReactNode } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

type Props = {
  children?: ReactNode;
  title?: string;
  subTitle?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
  subTitle,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxW={{ xl: "1200px" }} h="100vh">
      <Flex pt={10} pb={24}>
        <Box>
          <Heading>{title}</Heading>
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            {subTitle}
          </Text>
        </Box>

        <Spacer />
        <ColorModeSwitcher />
      </Flex>
      <Box pb={20}>{children}</Box>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        zIndex="sticky"
        borderTop="1px"
        borderColor="gray.200"
        py={2}
        w="full"
      >
        <footer style={{ backgroundColor: "white" }}>
          <Container maxW={{ xl: "1200px" }}>
            <Flex>
              <Box color="#000000">
                <span>React Query Example</span>
              </Box>
              <Spacer />
              <Box>
                <Link href="https://github.com/williamtobing" isExternal mx={4}>
                  <Icon as={FaGithub} w={6} h={6} color="#24292e" />
                </Link>
                <Link href="https://www.youtube.com/robots.txt" isExternal>
                  <Icon as={FaYoutube} w={6} h={6} color="#c4302b" />
                </Link>
                <Code ml={4} color="#000000">
                  williams
                </Code>
              </Box>
            </Flex>
          </Container>
        </footer>
      </Box>
    </Container>
  </div>
);

export default Layout;
