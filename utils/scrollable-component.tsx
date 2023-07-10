"use client";
import { useRef, useState } from "react";
import { Position, defaultPosition } from "./position-util";
import { Box, useStyleConfig } from "@chakra-ui/react";

interface ScrollableComponentState {
  grabbing: boolean;
  position: Position;
}

interface ScrollableComponentProps {
  children: any;
  id?: string;
}

const ScrollableComponent: React.FC<ScrollableComponentProps> = ({
  children,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [state, setStateTo] = useState<ScrollableComponentState>({
    grabbing: false,
    position: defaultPosition(),
  });

  const handleOnMouseDown = (e: any): void => {
    setStateTo({
      ...state,
      grabbing: true,
      position: {
        x: e.clientX,
        left: ref.current!.scrollLeft,
      },
    });
  };

  const handleOnMouseMove = (e: any): void => {
    if (state.grabbing) {
      const left: number = Math.max(
        0,
        state.position.left + (state.position.x - e.clientX)
      );

      ref.current!.scrollLeft = left;
    }
  };

  const handleOnMouseUp = (): void => {
    if (state.grabbing) {
      setStateTo({ ...state, grabbing: false });
    }
  };

  return (
    <Box
      marginTop={"15px"}
      paddingTop={"5px"}
      ref={ref}
      cursor={"grab"}
      overflow={"auto"}
      userSelect={"none"}
      width={"100%"}
      _active={{ cursor: "grabbing" }}
      __css={{
        "&::-webkit-scrollbar": {
          height: "0px",
          width: "0px",
        },
      }}
      id={id}
      ///quicknav styles >>
      display={"flex"}
      gap={"10px"}
      // marginTop={"20px"}
      paddingBottom={"5px"}
      w={"100%"}
      zIndex={3}
      ///

      onMouseDown={handleOnMouseDown}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseUp}
    >
      {children}
    </Box>
  );
};
export default ScrollableComponent;
