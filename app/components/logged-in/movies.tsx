"use client";
import MenuSection from "@/utils/menu-section";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Movies: React.FC = () => {
  const getMovies = (): JSX.Element[] => {
    return [
      {
        desc: "",
        id: 1,
        title: "",
        localImage: "DE.png",
        bgGradient:
          "linear(to-t, rgba(57, 73, 171, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 2,
        title: "",
        localImage: "Oasis.png",
        bgGradient:
          "linear(to-t, rgba(103, 58, 183, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 3,
        title: "",
        localImage: "Mando.png",
        bgGradient:
          "linear(to-t, rgba(239, 83, 80, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 4,
        localImage: "nekron1.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(42, 252, 152, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 5,
        localImage: "animalsm1.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(57, 73, 171, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 6,
        localImage: "animalsm2.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(103, 58, 183, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 7,
        localImage: "animalsm3.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(239, 83, 80, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 8,
        localImage: "card1.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(42, 252, 152, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 9,
        localImage: "card2.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(57, 73, 171, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 10,
        localImage: "card3.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(103, 58, 183, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 11,
        localImage: "card4.png",
        title: "",
        bgGradient:
          "linear(to-t, rgba(239, 83, 80, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "",
        id: 12,
        localImage: "osh2.jpg",
        title: "",
        bgGradient:
          "linear(to-t, rgba(42, 252, 152, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
    ].map((movie: any) => {
      const movieStyles: any = {
        backgroundImage: `url(${movie.image})`,
        backgroundUrl: `url(/${movie.localImage})`,
        bgGradient: `${movie.bgGradient}`,
      };

      const id: string = `movie-card-${movie.id}`;
      return (
        <Box
          key={movie.id}
          id={id}
          className="movie-card"
          backgroundColor={"gray.800"}
          borderRadius={"10px"}
          boxShadow={"2px 2px 4px rgba(0,0,0, 0.25)"}
          cursor={"pointer"}
          h={"40vdh"}
          maxH={"600px"}
          minH={"460px"}
          minW={"260px"}
          overflow={"hidden"}
          position={"relative"}
          w={"calc(100%/4)"}
          _hover={{ transform: "translateY(-5px)" }}
          transition={"transform 250ms"}
        >
          <Box
            className="movie-card-background background-image"
            // backgroundImage={movieStyles.backgroundImage}
            bgImage={movieStyles.backgroundUrl}
            borderRadius={"10px"}
            height={"100%"}
            left={"0px"}
            position={"absolute"}
            top={"0px"}
            w={"100%"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            _hover={{ transform: "scale(1.05)" }}
            transition={"transform 250ms"}
            zIndex={1}
          />
          <Box
            className="movie-card-content"
            borderRadius={"10px"}
            height={"100%"}
            position={"relative"}
            zIndex={2}
            bgGradient={movie.bgGradient}
          >
            <Box
              className="movie-card-info"
              display={"flex"}
              flexDirection={"column"}
              gap={"5px"}
              padding={"30px"}
            >
              <Heading
                className="movie-card-title"
                color={"whiteAlpha.800"}
                fontSize={"2em"}
                textShadow={" 2px 2px 2px rgba(0,0,0, 0.1)"}
              >
                {movie.title}
              </Heading>
              <Text
                className="movie-card-desc"
                color={"whiteAlpha.800"}
                fontSize={"0.9em"}
                textShadow={" 2px 2px 2px rgba(0,0,0, 0.1)"}
              >
                {movie.desc}
              </Text>
            </Box>
            <i className={movie.icon} />
          </Box>
        </Box>
      );
    });
  };

  return (
    <MenuSection
      icon="fa-solid fa-camera-movie"
      id="movies-section"
      scrollable
      title="Blender renders and Photoshop!"
    >
      {getMovies()}
    </MenuSection>
  );
};
