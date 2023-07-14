"use client";
import ScrollableComponent from "@/utils/scrollable-component";
import { Box, Text } from "@chakra-ui/react";

export const QuickNav: React.FC = (props: any) => {
  const getItems = (): JSX.Element[] => {
    return [
      {
        id: 1,
        label: "Linkdin",
      },
      {
        id: 2,
        label: "CV",
      },
      {
        id: 3,
        label: "Skill set",
      },
      {
        id: 4,
        label: "Projects",
      },
      {
        id: 5,
        label: "About",
      },
      {
        id: 6,
        label: "Contact",
      },
    ].map((item: any) => {
      return (
        <Box
          key={item.id}
          className="quick-nav-item clear-button"
          padding={"10px 20px"}
          _last={{ marginRight: "10px" }}
          bgColor={"rgba(255, 255, 255, .1)"}
          border={"1px solid"}
          borderColor={"rgba(255, 255, 255, .1)"}
          backdropFilter={"blur(3px)"}
          borderRadius={"3xl"}
          boxShadow={"2px 2px 2px rgba(0,0,0, 0.1)"}
          cursor={"pointer"}
          _hover={{
            bgColor: "rgba(255, 255, 255, .2)",
            borderColor: "rgba(255, 255, 255, .3)",
          }}
        >
          <Text
            className="quick-nav-item-label"
            color={"whiteAlpha.800"}
            textShadow={"text-shadow: 0px 0px 2px rgba(0,0,0, 0.1)"}
          >
            {item.label}
          </Text>
        </Box>
      );
    });
  };

  return <ScrollableComponent id="quick-nav">{getItems()}</ScrollableComponent>;
};
