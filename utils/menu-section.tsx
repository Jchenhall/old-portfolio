"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
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
      <Box marginTop={"15px"} paddingTop={"5px"}>
        {children}
      </Box>
    );
  };

  return (
    <Box id={id} className="menu-section" marginTop={"60px"}>
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
