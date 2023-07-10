"use client";
import { UserStatus } from "@/enums/enums";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface PinDigitProps {
  focused: boolean;
  value: string;
  userStatus: UserStatus;
}

export const PinDigit: React.FC<PinDigitProps> = ({
  value,
  focused,
  userStatus,
}) => {
  const [hidden, setHiddenTo] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      const timeout = setTimeout(() => {
        setHiddenTo(true);
      }, 500);

      return () => {
        setHiddenTo(false);

        clearTimeout(timeout);
      };
    }
  }, [value]);

  return (
    <Box
      alignItems={"center"}
      backgroundColor={
        userStatus == UserStatus.LogInError
          ? "rgba(239, 83, 80, 0.2)"
          : "rgba(255, 255, 255, 0.05)"
      }
      border={"5px solid"}
      borderColor={
        userStatus == UserStatus.LogInError
          ? "rgba(239, 83, 80, 0.5)"
          : "rgba(255, 255, 255, 0.2)"
      }
      borderRadius={"10px"}
      boxShadow={"2px 2px 2px rgba(0, 0, 0, 0.06)"}
      display={"inline-flex"}
      fontSize={"3rem"}
      height={"80px"}
      w={"60px"}
      justifyContent={"center"}
      position={"relative"}
      transition={"backgroundColor 250ms, borderColor 250ms"}
      _before={{
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.06)",
        content: '""',
        position: "absolute",
        transition: "opacity 250ms, transform 250ms",
        zIndex: 3,
        backgroundColor: "gray.500",
        borderRadius: "10px",
        bottom: "0px",
        height: "3px",
        left: "15%",
        opacity: focused ? 1 : 0,
        transform: focused ? "translateY(-10px)" : "translateY(0px)",
        width: "70%",
        animation: focused ? "blink 2s ease-in-out infinite" : undefined,
      }}
      _after={{
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.06)",
        position: "absolute",
        transition: "opacity 250ms, transform 250ms",
        zIndex: 3,
        content: '""',
        backgroundColor: "gray.500",
        borderRadius: "20px",
        height: "20px",
        opacity: hidden ? 1 : 0,
        transform: hidden ? "scale(1)" : "scale(0.25)",
        width: "20px",
      }}
    >
      <Text
        opacity={hidden ? 0 : 1}
        transform={hidden ? "scale(0.25)" : undefined}
        color={"gray.500"}
        transition={"opacity 250ms, transform 250ms"}
      >
        {value || ""}
      </Text>
    </Box>
  );
};
