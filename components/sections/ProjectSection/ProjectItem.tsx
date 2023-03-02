import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Img,
  Link,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectItemProps = {
  project: {
    name: string;
    img: string;
    tools: string[];
    url?: string | undefined;
    github: string;
    description: string;
  };
  language: string;
};

const boxVariants = {
  initial: { x: 0, y: 0 },
  hovered: { x: 6, y: 6 },
};

const imageVariants = {
  hovered: { scale: 1, opacity: 0.5 },
};

const buttonVariants = {
  hovered: { opacity: 1 },
};

const ProjectItem = ({ project, language }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <GridItem backgroundColor="purple.600" borderRadius="lg" >
      <Box
        animate={isMobile && isHovered ? "hovered" : "initial"}
        as={motion.div}
        backgroundColor="bg-card"
        borderRadius="lg"
        borderWidth="1px"
        h="100%"
        initial="initial"
        overflow="hidden"
        variants={boxVariants}
        whileHover="hovered"
        onHoverEnd={() => !isMobile && setIsHovered(false)}
        onHoverStart={() => !isMobile && setIsHovered(true)}
        onClick={() => {isMobile && setIsHovered(!isHovered)}}
      >
        <Flex alignItems="center" justifyContent="center" overflow="hidden">
          <motion.div
            style={{width:"100%",minHeight:"190px", position:"relative"}}
            initial={{ scale: 1.05 }}
            variants={imageVariants}
          >
            <Image
              src={project.img}
              alt={project.name}
              style={{ objectFit: "cover"}}
              loading="lazy"
              fill
              sizes="100% 190px"
            />
          </motion.div>
          <HStack position="absolute" zIndex={100}>
            <Link isExternal href={project.github} variant="unstyled">
              <Button
                as={motion.button}
                colorScheme="purple"
                display={isHovered ? "block" : "none"}
                initial={{ opacity: 0 }}
                size="sm"
                variants={buttonVariants}
              >
                {language === "es" ? "Repositorio" : "Repository"}
              </Button>
            </Link>
            {project.url && (
              <Link isExternal href={project.url} variant="unstyled">
                <Button
                  as={motion.button}
                  colorScheme="purple"
                  display={isHovered ? "block" : "none"}
                  initial={{ opacity: 0 }}
                  size="sm"
                  variants={buttonVariants}
                >
                  {language === "es" ? "Página" : "Visit page"}
                </Button>
              </Link>
            )}
          </HStack>
        </Flex>

        <Box
          as={motion.div}
          display="flex"
          flexDir="column"
          h="calc(100% - 190px)"
          p={3}
        >
          <Text fontSize="2xl" fontWeight="bold">
            {project.name}
          </Text>
          <Box flex={1} fontSize="sm" pt={2}>
            {project.description}
          </Box>
          <Box pt={2}>
            {project.tools.map((tool) => (
              <Tag
                key={tool}
                fontSize="sm"
                fontWeight="bold"
                mr={1}
                mt={1}
                variant="subtle"
              >
                {tool}
              </Tag>
            ))}
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
};

export default ProjectItem;
