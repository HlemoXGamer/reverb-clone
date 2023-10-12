import { Container } from "@chakra-ui/react";
import React from "react";
import HomeCarousel from "../../components/Home/Carousel/HomeCarousel";
import HomeTestimonials from "../../components/Home/Testimonials/HomeTestimonials";
import HomeProducts from "../../components/Home/Products/HomeProducts";

const HomePage = () => {
    return (
        <React.Fragment>
            <HomeCarousel />
            <Container maxW={"8xl"}>
                <HomeTestimonials />
                <HomeProducts title="New Arrivals" />
                <HomeProducts title="Great Offers !" simplified={true} />
                <HomeProducts title="Top Selling Products" simplified={true} />
            </Container>
        </React.Fragment>
    );
};

export default HomePage;
