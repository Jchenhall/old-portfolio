"use client";
import { UserStatus } from "@/enums/enums";
import {
  Box,
  Button,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type SignInButtonProps = {
  userStatus: UserStatus;
  setUserStatusTo: Dispatch<SetStateAction<UserStatus>>;
};

const bounce = keyframes`
  from,
  6.66%,
  17.66%,
  33.33% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  13.33%,
  14.33% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  23.33% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  26.66% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  30% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;

const SignInButton: React.FC<SignInButtonProps> = ({
  setUserStatusTo,
  userStatus,
}) => {
  const handleOnClick = (): void => {
    if (userStatus === UserStatus.LoggedOut) {
      setUserStatusTo(UserStatus.LoggingIn);
    } else {
      setUserStatusTo(UserStatus.LoggedOut);
    }
  };

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${bounce} infinite 3s`;

  return (
    <Button
      size={"lg"}
      bgColor={"rgba(255, 255, 255, .1)"}
      border={"1px solid"}
      borderColor={"rgba(255, 255, 255, .1)"}
      backdropFilter={"blur(3px)"}
      borderRadius={"3xl"}
      color={"whiteAlpha.900"}
      boxShadow={"2px 2px 2px rgba(0,0,0, 0.1)"}
      _hover={{
        transform: "scale(1.2)",
        bgColor: "rgba(255, 255, 255, .2)",
        borderColor: "rgba(255, 255, 255, .3)",
        color: "orange.400",
      }}
      disabled={userStatus === userStatus}
      onClick={handleOnClick}
      animation={userStatus === UserStatus.LoggedIn ? undefined : animation}
    >
      {userStatus === UserStatus.LoggedIn ? "Logout" : "Login"}
    </Button>
  );
};

export default SignInButton;
