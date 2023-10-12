import { Container } from "@chakra-ui/react";
import React from "react";
import HomeCarousel from "../../components/Home/Carousel/HomeCarousel";
import HomeTestimonials from "../../components/Home/Testimonials/HomeTestimonials";

const HomePage = () => {
    return (
        <React.Fragment>
            <HomeCarousel />
            <Container maxW={"8xl"}>
                <HomeTestimonials />
            </Container>
        </React.Fragment>
    );
};

export default HomePage;
