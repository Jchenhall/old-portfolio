"use client";

import MenuSection from "@/utils/menu-section";

import { Box, HStack, Icon, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const Weather: React.FC = () => {
  const [weatherForecast, setWeatherForecast] = useState<any>({});

  const getForcastData = async () => {
    await axios
      .get(
        "https://api-bdc.net/data/ip-geolocation?key=bdc_1d5bbb07eb374d60ac3c0ddb6950972e"
      )
      .then((response) => {
        return response.data.ip;
      })
      .then(async (ip) => {
        await axios
          .get(
            `https://api.weatherapi.com/v1/forecast.json?q=${ip}&days=7&key=cc0c30ef4f414185ada224930230907`
          )
          .then((response) => {
            setWeatherForecast(response.data.forecast.forecastday); // firstData is still an empty Object here for some reason
          });
      });
  };

  const getWeekday = (s: any) => {
    const [yyyy, mm, dd] = s.split("-"),
      date = new Date(yyyy, mm - 1, dd);
    return date.toLocaleDateString("en-Uk", { weekday: "short" });
  };

  useEffect(() => {
    getForcastData();
  }, []);

  const dateStr = weatherForecast[1]?.date;

  const getDays = (): JSX.Element[] => {
    return [
      {
        id: 1,
        name:
          weatherForecast[0]?.date != undefined
            ? getWeekday(weatherForecast[0]?.date)
            : "oof",
        temperature: weatherForecast[0]?.day?.avgtemp_c,
        weather: weatherForecast[0]?.day?.condition?.text,
        icon: weatherForecast[0]?.day?.condition?.icon,
      },
      {
        id: 2,
        name:
          weatherForecast[1]?.date != undefined
            ? getWeekday(weatherForecast[1]?.date)
            : "oof",
        temperature: weatherForecast[1]?.day?.avgtemp_c,
        weather: weatherForecast[1]?.day?.condition?.text,
        icon: weatherForecast[1]?.day?.condition?.icon,
      },
      {
        id: 3,
        name:
          weatherForecast[2]?.date != undefined
            ? getWeekday(weatherForecast[2]?.date)
            : "oof",
        temperature: weatherForecast[2]?.day?.avgtemp_c,
        weather: weatherForecast[2]?.day?.condition?.text,
        icon: weatherForecast[2]?.day?.condition?.icon,
      },
      {
        id: 4,
        name:
          weatherForecast[3]?.date != undefined
            ? getWeekday(weatherForecast[3]?.date)
            : "oof",
        temperature: weatherForecast[3]?.day?.avgtemp_c,
        weather: weatherForecast[3]?.day?.condition?.text,
        icon: weatherForecast[3]?.day?.condition?.icon,
      },
      {
        id: 5,
        name:
          weatherForecast[4]?.date != undefined
            ? getWeekday(weatherForecast[4]?.date)
            : "oof",
        temperature: weatherForecast[4]?.day?.avgtemp_c,
        weather: weatherForecast[4]?.day?.condition?.text,
        icon: weatherForecast[4]?.day?.condition?.icon,
      },
      {
        id: 6,
        name:
          weatherForecast[5]?.date != undefined
            ? getWeekday(weatherForecast[5]?.date)
            : "oof",
        temperature: weatherForecast[5]?.day?.avgtemp_c,
        weather: weatherForecast[5]?.day?.condition?.text,
        icon: weatherForecast[5]?.day?.condition?.icon,
      },
      {
        id: 7,
        name:
          weatherForecast[6]?.date != undefined
            ? getWeekday(weatherForecast[6]?.date)
            : "oof",
        temperature: weatherForecast[6]?.day?.avgtemp_c,
        weather: weatherForecast[6]?.day?.condition?.text,
        icon: weatherForecast[6]?.day?.condition?.icon,
      },
    ].map((day: any) => {
      return (
        <Box
          key={day.id}
          className="day-card"
          backdropFilter={"blur(3px)"}
          bgColor={"rgba(255, 255, 255, .1)"}
          border={"1px solid"}
          borderColor={"rgba(255, 255, 255, .1)"}
          borderRadius={"3xl"}
          boxShadow={"2px 2px 2px rgba(0,0,0, 0.1)"}
          h={"8dvh"}
          maxH={"160px"}
          minH={"140px"}
          minW={"180px"}
          w={"calc(100% / 7)"}
          position={"relative"}
          padding={"10px 20px"}
          _last={{ marginRight: "5px" }}
          cursor={"pointer"}
          _hover={{
            bgColor: "rgba(255, 255, 255, .2)",
            borderColor: "rgba(255, 255, 255, .3)",
          }}
        >
          <Box
            className="day-card-content"
            display={"flex"}
            flexDirection={"column"}
            h={"calc(100% -20px)"}
            justifyContent={"space-evenly"}
            padding={"10px"}
          >
            <HStack>
              <Text
                className="day-name"
                fontSize={"0.9em"}
                textTransform={"uppercase"}
                color={"whiteAlpha.800"}
              >
                {day.name} :
              </Text>
              <Text
                className="day-weather-temperature"
                alignItems={"flex-start"}
                display={"flex"}
                fontSize={"0.9em"}
                justifyContent={"center"}
                color={"whiteAlpha.800"}
              >
                {day.temperature}
              </Text>
              <Text
                className="day-weather-temperature-unit"
                alignItems={"flex-start"}
                display={"flex"}
                fontSize={"0.8em"}
                marginLeft={"3px"}
                justifyContent={"center"}
                color={"whiteAlpha.800"}
              >
                °C
              </Text>
            </HStack>
            <Text
              alignItems={"flex-start"}
              display={"flex"}
              fontSize={"0.9em"}
              // justifyContent={"center"}
              color={"whiteAlpha.800"}
            >
              {day.weather}
            </Text>
            <Box
              display={"flex"}
              position={"relative"}
              alignItems={"flex-start"}
              // justifyContent={"center"}
            >
              <Image
                src={day.icon}
                w={"65px"}
                h={"65px"}
                alt={"weather icon"}
              />
            </Box>

            {/* <i
            // className={classNames(
            //   "day-weather-icon",
            //   getIcon(),
            //   day.weather.toLowerCase()
            // )}
            /> */}
          </Box>
        </Box>
      );
    });
  };
  return (
    <MenuSection
      icon="fa-solid fa-sun"
      id="weather-section"
      scrollable
      title="How's it look out there?"
    >
      {getDays()}
    </MenuSection>
  );
};
