"use client";
import MenuSection from "@/utils/menu-section";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Restaurants: React.FC = () => {
  const getRestaurants = (): JSX.Element[] => {
    return [
      {
        desc: "The best burgers in town",
        id: 1,
        image:
          "https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Burgers",
      },
      {
        desc: "The worst ice-cream around",
        id: 2,
        image:
          "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Ice Cream",
      },
      {
        desc: "This 'Za be gettin down",
        id: 3,
        image:
          "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Pizza",
      },
      {
        desc: "BBQ ain't need no rhyme",
        id: 4,
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFyYmVxdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "BBQ",
      },
    ].map((restaurant: any) => {
      const styles: any = {
        backgroundImage: `url(${restaurant.image})`,
      };

      return (
        <Box
          key={restaurant.id}
          className="restaurant-card background-image"
          backgroundImage={styles.backgroundImage}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          borderRadius={"10px"}
          boxShadow={"2px 2px 4px rgba(0,0,0, 0.25)"}
          cursor={"pointer"}
          h={"14dvw"}
          maxH={"240px"}
          position={"relative"}
          w={"25%"}
          transition={"transform 250ms"}
          _hover={{
            transform: "translateY(-5px)",
          }}
        >
          <Box
            className="restaurant-card-content"
            w={"100%"}
            h={"100%"}
            bgGradient={"linear(to-t, rgba(0,0,0, 0.8), transparent)"}
            _hover={{
              transform: "translateY(-5px)",
              bgGradient: "linear(to-t, transparent, transparent)",
            }}
          >
            <Box
              className="restaurant-card-content-items"
              bottom={"0px"}
              display={"flex"}
              flexDirection={"column"}
              m={"20px"}
              position={"absolute"}
              right={"0px"}
              textAlign={"right"}
              _hover={{ marginBottom: "30px" }}
              transition={"margin 250ms"}
            >
              <Heading
                className="restaurant-card-title"
                color={"whiteAlpha.800"}
                fontSize={"1.5em"}
              >
                {restaurant.title}
              </Heading>
              <Text
                className="restaurant-card-desc"
                color={"blue.500"}
                fontSize={"0.9em"}
              >
                {restaurant.desc}
              </Text>
            </Box>
          </Box>
        </Box>
      );
    });
  };
  return (
    <MenuSection
      icon="fa-regular fa-pot-food"
      id="restaurants-section"
      title="Get it delivered!"
      scrollable
    >
      {getRestaurants()}
    </MenuSection>
  );
};
