"use client";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import ScrollableComponent from "./scrollable-component";

interface MenuSectionProps {
  children: any;
  icon: string;
  id: string;
  scrollable?: boolean;
  title: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  children,
  icon,
  id,
  scrollable,
  title,
}) => {
  const getContent = () => {
    if (scrollable) {
      return <ScrollableComponent>{children}</ScrollableComponent>;
    }

    return (
      <HStack
        display={"flex"}
        justifyContent={"center"}
        marginTop={"15px"}
        paddingTop={"5px"}
        id={id}
        flexWrap={"wrap"}
        gap={"10px"}
      >
        {children}
      </HStack>
    );
  };
  console.log("id", id);
  return (
    <Box
      id={id}
      className="menu-section"
      marginTop={"60px"}
      flexWrap={id == "skill-section" ? "wrap" : undefined}
    >
      <Box
        className="menu-section-title"
        alignItems={"center"}
        display={"flex"}
        gap={"6px"}
      >
        <i className={icon} />
        <Heading
          color={"whiteAlpha.900"}
          fontSize={"1.25em"}
          className="menu-section-title-text"
        >
          {title}
        </Heading>
      </Box>
      {getContent()}
    </Box>
  );
};
export default MenuSection;
