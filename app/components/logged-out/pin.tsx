"use client";

import { LogInUtility } from "@/utils/login-util";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PinDigit } from "./pin-digit";
import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { UserStatus } from "@/enums/enums";

type PinProps = {
  userStatus: UserStatus;
  setUserStatusTo: Dispatch<SetStateAction<UserStatus>>;
};

const Pin: React.FC<PinProps> = ({ userStatus, setUserStatusTo }) => {
  const [pinCode, setPinCode] = useState<string>("");
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (
      userStatus === UserStatus.LoggingIn ||
      userStatus === UserStatus.LogInError
    ) {
      ref.current!.focus();
    } else {
      setPinCode("");
    }
  }, [userStatus]);

  useEffect(() => {
    if (pinCode.length === 4) {
      const verify = async (): Promise<void> => {
        try {
          setUserStatusTo(UserStatus.VerifyingLogIn);

          if (await LogInUtility.verify(pinCode)) {
            setUserStatusTo(UserStatus.LoggedIn);
          }
        } catch (err) {
          console.error(err);

          setUserStatusTo(UserStatus.LogInError);
        }
      };

      verify();
    }

    if (userStatus === UserStatus.LogInError) {
      setUserStatusTo(UserStatus.LoggingIn);
    }
  }, [pinCode]);

  const handleOnClick = (): void => {
    ref.current!.focus();
  };

  const handleOnCancel = (): void => {
    setUserStatusTo(UserStatus.LoggedOut);
  };

  const handleOnChange = (e: any): void => {
    if (e.target.value.length <= 4) {
      setPinCode(e.target.value.toString());
    }
  };

  const getCancelText = () => {
    return (
      <Text
        cursor={"pointer"}
        marginLeft={"2px"}
        _hover={{ textDecoration: "underline" }}
        onClick={handleOnCancel}
      >
        Cancel
      </Text>
    );
  };

  const getErrorText = () => {
    if (userStatus === UserStatus.LogInError) {
      return <Text color={"red.900"}>Invalid</Text>;
    }
  };

  return (
    <Box
      opacity={
        userStatus == UserStatus.LoggingIn ||
        userStatus == UserStatus.LogInError
          ? 1
          : 0
      }
      pointerEvents={
        userStatus === UserStatus.LoggingIn ||
        userStatus === UserStatus.LogInError
          ? "all"
          : "none"
      }
      transform={
        userStatus === UserStatus.LoggingIn ||
        userStatus === UserStatus.LogInError
          ? "translate(-50%, -50%) scale(1)"
          : "translate(-50%, -30%) scale(0.8)"
      }
      transition={"opacity 250ms, transform 250ms"}
      position={"absolute"}
      left={"50%"}
      top={"50%"}
      zIndex={2}
      onClick={handleOnClick}
    >
      <Input
        disabled={
          userStatus !== UserStatus.LoggingIn &&
          userStatus !== UserStatus.LogInError
        }
        focusBorderColor={"none"}
        backgroundColor={"transparent"}
        border={"none"}
        h={"0px"}
        w={"0px"}
        outline={"none"}
        pointerEvents={"none"}
        position={"absolute"}
        maxLength={4}
        ref={ref}
        type="number"
        value={pinCode}
        onChange={handleOnChange}
      />
      <Box display={"flex"} gap={"10px"} onClick={handleOnClick}>
        <PinDigit
          userStatus={userStatus}
          focused={pinCode.length === 0}
          value={pinCode[0]}
        />
        <PinDigit
          userStatus={userStatus}
          focused={pinCode.length === 1}
          value={pinCode[1]}
        />
        <PinDigit
          userStatus={userStatus}
          focused={pinCode.length === 2}
          value={pinCode[2]}
        />
        <PinDigit
          userStatus={userStatus}
          focused={pinCode.length === 3}
          value={pinCode[3]}
        />
      </Box>
      <Heading
        size={"sm"}
        color={"gray.700"}
        fontSize={"0.9em"}
        margin={"10px"}
        textShadow={"2px 2px 2px rgba(0,0,0, 0.1)"}
      >
        Enter PIN (1234)
        {getErrorText()}
        {getCancelText()}
      </Heading>
    </Box>
  );
};

export default Pin;
