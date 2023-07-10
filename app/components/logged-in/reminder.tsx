"use client";
import { Box, Heading } from "@chakra-ui/react";

export const Reminder: React.FC = () => {
  return (
    <Box className="reminder" display={"flex"} gap={"6px"} marginTop={"10px"}>
      <Box className="reminder-icon" display={"inline-flex"}>
        <i className="fa-regular fa-bell" />
      </Box>
      <Heading
        className="reminder-text"
        color={"whiteAlpha.900"}
        fontSize={"1.3em"}
      >
        Extra cool people meeting
      </Heading>
      <Heading
        className="reminder-time"
        alignItems={"flex-end"}
        color={"blue.500"}
        fontSize={"1.1em"}
        height={"20px"}
        textShadow={"dark-lg"}
      >
        10AM
      </Heading>
    </Box>
  );
};
