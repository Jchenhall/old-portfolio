"use client";
import MenuSection from "@/utils/menu-section";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export const Tools: React.FC = () => {
  const getTools = (): JSX.Element[] => {
    return [
      {
        icon: "fa-solid fa-cloud-sun",
        id: 1,
        image:
          "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        label: "Weather",
        name: "Cloudly",
      },
      {
        icon: "fa-solid fa-calculator-simple",
        id: 2,
        image:
          "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Calc",
        name: "Mathio",
      },
      {
        icon: "fa-solid fa-piggy-bank",
        id: 3,
        image:
          "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Bank",
        name: "Cashy",
      },
      {
        icon: "fa-solid fa-plane",
        id: 4,
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        label: "Travel",
        name: "Fly-er-io-ly",
      },
      {
        icon: "fa-solid fa-gamepad-modern",
        id: 5,
        image:
          "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Games",
        name: "Gamey",
      },
      {
        icon: "fa-solid fa-video",
        id: 6,
        image:
          "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvJTIwY2hhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Video Chat",
        name: "Chatty",
      },
    ].map((tool: any) => {
      const toolStyles: any = {
        backgroundImage: `url(${tool.image})`,
      };
      const id: string = `tool-card-${tool.id}`;

      return (
        <Box
          key={tool.id}
          id={id}
          className="tool-card"
          bgColor={"rgba(255, 255, 255, .1)"}
          borderRadius={"10px"}
          boxShadow={"2px 2px 2px rgba(0,0,0, 0.1)"}
          cursor={"pointer"}
          h={"8dvw"}
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
        >
          <Box
            className="tool-card-background background-image"
            backgroundImage={toolStyles.backgroundImage}
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
            className="tool-card-content"
            bgGradient={"linear(to-r, rgba(0,0,0, 0.4), rgba(0,0,0, 0.1))"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            h={"calc(100% )"}
            justifyContent={"space-between"}
            padding={"20px"}
            position={"relative"}
            w={"calc(100% )"}
            zIndex={2}
            _hover={{ bgGradient: "linear(to-r, transparent, transparent)" }}
          >
            <Box
              className="tool-card-content-header"
              display={"flex"}
              flexDirection={"column"}
              gap={"2px"}
            >
              <Text
                className="tool-card-label"
                color={"orange.500"}
                fontSize={"0.8em"}
                textTransform={"uppercase"}
              >
                {tool.label}
              </Text>
              <Text
                className="tool-card-name"
                color={"whiteAlpha.800"}
                fontSize={"1.25em"}
              >
                {tool.name}
              </Text>
            </Box>
            <i className={tool.icon} />
          </Box>
        </Box>
      );
    });
  };

  return (
    <MenuSection
      icon="fa-solid fa-toolbox"
      id="tools-section"
      title="My coding projects"
      scrollable
    >
      {getTools()}
    </MenuSection>
  );
};
