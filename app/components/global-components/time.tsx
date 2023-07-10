"use client";
import { useCurrentDateEffect } from "@/context/date";
import { UserStatus } from "@/enums/enums";
import { T } from "@/utils/time-util";
import { Box, Heading } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

const Time: React.FC = () => {
  const date: Date = useCurrentDateEffect();

  return (
    <Heading
      fontSize={"8em"}
      color={"whiteAlpha.700"}
      h={"6rem"}
      lineHeight={"80px"}
      textShadow={"2px 2px 2px rgba(0,0,0, 0.1)"}
      cursor={"pointer"}
    >
      {T.format(date)}
    </Heading>
  );
};
export default Time;
