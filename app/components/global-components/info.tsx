"use client";

import { UserStatus } from "@/enums/enums";
import Time from "./time";
import { WeatherSnap } from "./weather-snap";
import { Box } from "@chakra-ui/react";
type InfoProps = {
  userStatus: UserStatus;
};
export const Info: React.FC<InfoProps> = ({ userStatus }) => {
  return (
    <Box alignItems={"flex-end"} display={"flex"}>
      <Time />
      <WeatherSnap />
    </Box>
  );
};
