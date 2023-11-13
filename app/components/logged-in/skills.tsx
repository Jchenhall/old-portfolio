"use client";
import MenuSection from "@/utils/menu-section";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const Skills: React.FC = () => {
  const getSkills = (): JSX.Element[] => {
    return [
      {
        icon: "url(/icons/html5.png)",
        id: 1,
        value: 90,
        name: "HTML",
      },
      {
        icon: "url(/icons/css3.png)",
        id: 2,
        value: 90,
        name: "CSS",
      },
      {
        icon: "url(/icons/jscript.png)",
        id: 3,
        value: 90,
        name: "JavaScript",
      },
      {
        icon: "url(/icons/typescript.png)",
        id: 4,
        value: 80,
        name: "Typescript",
      },
      {
        icon: "url(/icons/react-brands.png)",
        id: 5,
        value: 90,
        name: "React",
      },

      {
        icon: "url(/icons/jest.png)",
        id: 8,
        value: 70,
        name: "Jest",
      },
      {
        icon: "url(/icons/cypress.png)",
        id: 9,
        value: 70,
        name: "Cypress",
      },
      {
        icon: "url(/icons/nodejs.png)",
        id: 10,
        value: 80,
        name: "Node",
      },
      {
        icon: "url(/icons/nextjs.png)",
        id: 11,
        value: 80,
        name: "Next.js",
      },

      {
        icon: "url(/icons/mongo.png)",
        id: 14,
        value: 90,
        name: "MongoDB",
      },
      {
        icon: "url(/icons/redux.png)",
        id: 15,
        value: 60,
        name: "Redux",
      },
      {
        icon: "url(/icons/Recoil.png)",
        id: 16,
        value: 50,
        name: "Recoil",
      },
      {
        icon: "url(/icons/mapbox.png)",
        id: 17,
        value: 70,
        name: "Mapbox",
      },
      {
        icon: "url(/icons/firebase.png)",
        id: 18,
        value: 60,
        name: "Firebase",
      },
      {
        icon: "url(/icons/chakra.png)",
        id: 19,
        value: 90,
        name: "Chakra UI",
      },
      {
        icon: "url(/icons/sass.png)",
        id: 20,
        value: 90,
        name: "Sass",
      },
    ].map((skill: any) => {
      const skillStyles: any = {
        backgroundImage: `url(${skill.image})`,
      };
      const id: string = `skill-card-${skill.id}`;

      return (
        <Box
          key={skill.id}
          id={id}
          className="skill-card"
          bgColor={"rgba(255, 255, 255, .1)"}
          borderRadius={"10px"}
          boxShadow={"2px 2px 2px rgba(0,0,0, 0.1)"}
          cursor={"pointer"}
          h={"8dvh"}
          maxH={"160px"}
          minH={"140px"}
          overflow={"hidden"}
          position={"relative"}
          backdropFilter={"blur(3px)"}
          w={"calc(100% / 6)"}
          _hover={{
            transform: "translateY(-5px)",
          }}
          transition={"transform 250ms"}
          bgImage={skill.icon}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"auto"}
        >
          <Box
            className="skill-card-background background-image"
            backgroundImage={skillStyles.backgroundImage}
            borderRadius={"10px"}
            h={"100%"}
            left={"0px"}
            opacity={0.5}
            position={"absolute"}
            top={"0px"}
            w={"100%"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
          />
          <Box
            className="skill-card-content"
            bgGradient={"linear(to-r, rgba(0,0,0, 0.4), rgba(0,0,0, 0.1))"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            h={"calc(100% )"}
            justifyContent={"space-between"}
            padding={"10px"}
            position={"relative"}
            w={"100%"}
            zIndex={2}
            _hover={{ bgGradient: "linear(to-r, transparent, transparent)" }}
          >
            <Box
              className="skill-card-content-header"
              display={"flex"}
              flexDirection={"column"}
              h={"100%"}
              gap={"2px"}
            >
              <Text
                position={"absolute"}
                className="skill-card-name"
                color={"orange.400"}
                fontSize={"1.25em"}
                opacity={1}
                transition={"opacity 250ms"}
              >
                {skill.name}
              </Text>
              <Box
                w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                opacity={0}
                id={"fff"}
                transition={"opacity 250ms"}
                _hover={{ opacity: 1 }}
              >
                {/* <CircularProgress
                  value={skill.value}
                  color="green.400"
                  size="100px"
                >
                  <CircularProgressLabel color={"blue.500"}>
                    {skill.value}%
                  </CircularProgressLabel>
                </CircularProgress> */}
              </Box>
            </Box>
          </Box>
        </Box>
      );
    });
  };

  return (
    <MenuSection
      icon="fa-solid fa-skillbox"
      id="skills-section"
      title="The tools I am currently proficient in"
    >
      {getSkills()}
    </MenuSection>
  );
};
