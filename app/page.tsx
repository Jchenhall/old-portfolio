"use client";
import { Box } from "@chakra-ui/react";
import { Background } from "./components/global-components/background";
import { useEffect, useState } from "react";
import SignInButton from "./components/global-components/sign-in-button";
import Pin from "./components/logged-out/pin";
import { UserStatus } from "@/enums/enums";

import { Info } from "./components/global-components/info";
import Menu from "./components/logged-in/menu";
import Loading from "./loading";
import axios from "axios";

const App: React.FC = () => {
  const [userStatus, setUserStatusTo] = useState<UserStatus>(
    UserStatus.LoggedOut
  );
  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, "-").toLowerCase();
  };
  console.log(getStatusClass());

  return (
    <Box backgroundColor={"gray.700"} h={"100%"} w={"100%"}>
      <Box
        bottom={
          userStatus === UserStatus.LoggedOut ||
          userStatus === UserStatus.LoggingIn
            ? "0px"
            : undefined
        }
        left={
          userStatus === UserStatus.LoggedOut ||
          userStatus === UserStatus.LoggingIn
            ? "0px"
            : undefined
        }
        margin={"40px"}
        marginLeft={userStatus === UserStatus.LoggedOut ? "40px" : "0px"}
        opacity={
          userStatus === UserStatus.LoggedIn ||
          userStatus === UserStatus.LoggedOut
            ? 1
            : 0
        }
        position={"absolute"}
        transform={
          userStatus === UserStatus.LoggedOut ||
          userStatus === UserStatus.LoggingIn
            ? "translateX(0%)"
            : "translateX(-100%)"
        }
        transition={"margin 250ms, opacity 250ms, transform 250ms"}
        zIndex={3}
      >
        <Info userStatus={userStatus} />
      </Box>

      <Pin userStatus={userStatus} setUserStatusTo={setUserStatusTo} />
      <Menu userStatus={userStatus} setUserStatusTo={setUserStatusTo} />

      <Background userStatus={userStatus} setUserStatusTo={setUserStatusTo} />

      <Box
        opacity={userStatus === UserStatus.LoggedOut ? 1 : 0}
        position={"absolute"}
        pointerEvents={userStatus === UserStatus.LoggedOut ? "all" : "none"}
        bottom={0}
        left={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={2}
        transform={
          userStatus === UserStatus.LoggedOut
            ? "translate(-50%, -40px)"
            : "translate(-50%, 40px)"
        }
        transition={"opacity 250ms, transform 250ms"}
      >
        <SignInButton
          userStatus={userStatus}
          setUserStatusTo={setUserStatusTo}
        />
      </Box>
      <Loading userStatus={userStatus} />
    </Box>
  );
};

export default App;
