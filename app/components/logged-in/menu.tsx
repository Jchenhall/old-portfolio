"use client";

import { UserStatus } from "@/enums/enums";

import { Info } from "../global-components/info";
import { Movies } from "./movies";
import { QuickNav } from "./quick-nav";
import { Reminder } from "./reminder";
import { Restaurants } from "./restaurants";
import { Tools } from "./tools";
import { Weather } from "./weather";
import { Dispatch, SetStateAction } from "react";
import { Box, Heading, VStack, transition } from "@chakra-ui/react";
import SignInButton from "../global-components/sign-in-button";

type MenuProps = {
  userStatus: UserStatus;
  setUserStatusTo: Dispatch<SetStateAction<UserStatus>>;
};
const Menu: React.FC<MenuProps> = ({ userStatus, setUserStatusTo }) => {
  return (
    <Box
      id="app-menu"
      h={"100dvh"}
      overflow={userStatus === UserStatus.LoggedIn ? "initial" : "hidden"}
      opacity={userStatus === UserStatus.LoggedIn ? 1 : 0}
      pointerEvents={userStatus === UserStatus.LoggedIn ? "all" : "none"}
      transform={
        userStatus === UserStatus.LoggedIn
          ? "translateY(0%)"
          : "translateY(-10%)"
      }
      transition={"opacity 250ms, transform 250ms"}
      position={"relative"}
      zIndex={3}
    >
      <Box
        id="app-menu-content-wrapper"
        marginTop={"30dvh"}
        minH={"80dvh"}
        padding={"80px"}
        paddingTop={"0px"}
        bgGradient="linear(to-b, transparent, blackAlpha.900)"
      >
        <Box
          id="app-menu-content"
          margin={"auto"}
          maxWidth={"1600px"}
          position={"relative"}
        >
          <Box
            id="app-menu-content-header"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box className="app-menu-content-header-section">
              <Info userStatus={userStatus} />
              <Reminder />
            </Box>
            <Box className="app-menu-content-header-section">
              <SignInButton
                userStatus={userStatus}
                setUserStatusTo={setUserStatusTo}
              />
            </Box>
          </Box>
          <QuickNav />
          <a
            id="youtube-link"
            className="clear-button"
            href="https://www.youtube.com/c/Hyperplexed"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube" />
            <Heading color={"whiteAlpha.800"} fontSize={"2em"}>
              Xoda1609
            </Heading>
          </a>
          <Weather />
          <Restaurants />
          <Tools />
          <Movies />
        </Box>
      </Box>
    </Box>
  );
};
export default Menu;
