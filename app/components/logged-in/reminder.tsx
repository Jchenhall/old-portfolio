"use client";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

export const Reminder: React.FC = () => {
  const [isName, setIsName] = useState("Jack");
  const name = "Jack";
  const text1 = `Hi! My name is `;
  const text2 = `. I am a front end engineer from the UK.`;
  return (
    <Box className="reminder" display={"flex"} gap={"6px"} marginTop={"6rem"}>
      <Heading
        className="reminder-text"
        color={"whiteAlpha.900"}
        fontSize={"2em"}
        display={"flex"}
        position={"relative"}
        textAlign={"center"}
        textShadow={"2px 4px 4px rgba(0,0,0,0.6)"}
      >
        {text1}
      </Heading>
      <Heading
        textShadow={"2px 4px 4px rgba(0,0,0,0.6)"}
        className="reminder-text"
        color={"orange.500"}
        fontSize={"2em"}
        display={"flex"}
        position={"relative"}
        textAlign={"center"}
        fontWeight={"extrabold"}
      >
        {name}
      </Heading>
      <Heading
        className="reminder-text"
        textShadow={"2px 4px 4px rgba(0,0,0,0.6)"}
        color={"whiteAlpha.900"}
        fontSize={"2em"}
      >
        {text2}
      </Heading>
    </Box>
  );
};
