"use client";
import { Dispatch, SetStateAction } from "react";

import { Box } from "@chakra-ui/react";
import { UserStatus } from "@/enums/enums";

type BackgroundProps = {
  userStatus: UserStatus;
  setUserStatusTo: Dispatch<SetStateAction<UserStatus>>;
};
export const Background: React.FC<BackgroundProps> = ({
  userStatus,
  setUserStatusTo,
}) => {
  const handleOnClick = (): void => {
    if (userStatus === UserStatus.LoggedOut) {
      setUserStatusTo(UserStatus.LoggingIn);
    }
  };
  return (
    <Box
      h={"100%"}
      left={"0px"}
      overflow={"hidden"}
      position={"fixed"}
      top={"0px"}
      w={"100%"}
      zIndex={1}
      onClick={handleOnClick}
    >
      <Box
        filter={
          userStatus === UserStatus.LoggingIn ||
          userStatus === UserStatus.LogInError ||
          userStatus === UserStatus.VerifyingLogIn
            ? "blur(8px)"
            : undefined
        }
        cursor={userStatus === UserStatus.LoggingIn ? "pointer" : "default"}
        transform={
          userStatus === UserStatus.LoggingIn ||
          userStatus === UserStatus.LogInError ||
          userStatus === UserStatus.VerifyingLogIn
            ? "scale(1.2)"
            : undefined
        }
        bgImage={
          "url(/bgpic4.jpg)"
          // "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
        }
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        h={"100%"}
        w={"100%"}
        transition={"filter 250ms, transform 250ms"}
      />
    </Box>
  );
};