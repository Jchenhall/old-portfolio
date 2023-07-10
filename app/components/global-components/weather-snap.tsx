"use client";
import { N } from "@/utils/number-util";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
export const WeatherSnap: React.FC = () => {
  const [weather, setWeather] = useState<any>({});
  const getData = async () => {
    await axios
      // .get("https://api.ipify.org/?format=json")
      .get(
        "https://api-bdc.net/data/ip-geolocation?key=bdc_1d5bbb07eb374d60ac3c0ddb6950972e"
      )
      .then((response) => {
        return response.data.ip;
      })
      .then(async (ip) => {
        await axios
          .get(
            `https://api.weatherapi.com/v1/current.json?q=${ip}&key=cc0c30ef4f414185ada224930230907`
          )
          .then((response) => {
            setWeather(response.data.current);
          });
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      display={"inline-flex"}
      h={"20px"}
      marginBottom={"6px"}
      marginLeft={"20px"}
    >
      <i className="weather-type fa-duotone fa-sun" />
      <Box
        alignItems={"center"}
        display={"inline-flex"}
        className="weather-temperature-value"
        color={"whiteAlpha.700"}
        fontSize={"1.5em"}
        h={"20px"}
        marginLeft={"5px"}
      >
        {weather?.temp_c}
      </Box>
      <Box
        className="weather-temperature-unit"
        color={"whiteAlpha.700"}
        display={"inline-flex"}
        alignItems={"flex-start"}
        fontSize={"0.8em"}
        marginLeft={"3px"}
      >
        °C
      </Box>
    </Box>
  );
};
