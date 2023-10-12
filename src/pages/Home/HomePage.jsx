import { Container } from "@chakra-ui/react";
import React from "react";
import HomeCarousel from "../../components/Home/Carousel/HomeCarousel";

const HomePage = () => {
    return (
        <React.Fragment>
            <HomeCarousel />
            <Container maxW={"8xl"}></Container>
        </React.Fragment>
    );
};

export default HomePage;
