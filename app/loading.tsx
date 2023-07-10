"use client";
import { UserStatus } from "@/enums/enums";
import { Box, Icon, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
type LoadingProps = {
  userStatus: UserStatus;
};
const Loading: React.FC<LoadingProps> = ({ userStatus }) => {
  return (
    <Box
      id="app-loading-icon"
      opacity={userStatus === UserStatus.VerifyingLogIn ? 1 : 0}
      pointerEvents={"none"}
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      transform={
        userStatus === UserStatus.VerifyingLogIn
          ? "translate(-50%, -50%)"
          : "translate(-50%, 0%)"
      }
      transition={"opacity 250ms, transform 250ms"}
      zIndex={2}
    >
      <Text
        color={"whiteAlpha.900"}
        fontSize={"2em"}
        animation={"2s spin ease-in-out infinate"}
      >
        Loading ...
      </Text>
    </Box>
  );
};
export default Loading;
