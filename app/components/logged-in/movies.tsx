"use client";
import MenuSection from "@/utils/menu-section";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Movies: React.FC = () => {
  const getMovies = (): JSX.Element[] => {
    return [
      {
        desc: "A tale of some people watching over a large portion of space.",
        id: 1,
        icon: "fa-solid fa-galaxy",
        image:
          "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Protectors of the Milky Way",
        bgGradient:
          "linear(to-t, rgba(57, 73, 171, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "Some people leave their holes to disrupt some things.",
        id: 2,
        icon: "fa-solid fa-hat-wizard",
        image:
          "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Hole People",
        bgGradient:
          "linear(to-t, rgba(103, 58, 183, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "A boy with a dent in his head tries to stop a bad guy. And by bad I mean bad at winning.",
        id: 3,
        icon: "fa-solid fa-broom-ball",
        image:
          "https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Pot of Hair",
        bgGradient:
          "linear(to-t, rgba(239, 83, 80, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
      {
        desc: "A long drawn out story of some people fighting over some space. Cuz there isn't enough of it.",
        id: 4,
        icon: "fa-solid fa-starship-freighter",
        image:
          "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Area Fights",
        bgGradient:
          "linear(to-t, rgba(42, 252, 152, 0.5), transparent, rgba(0,0,0, 0.4))",
      },
    ].map((movie: any) => {
      const movieStyles: any = {
        backgroundImage: `url(${movie.image})`,
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
            backgroundImage={movieStyles.backgroundImage}
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
      title="Popcorn time!"
    >
      {getMovies()}
    </MenuSection>
  );
};
