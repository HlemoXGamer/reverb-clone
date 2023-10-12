import { Container, Box } from "@chakra-ui/react";
import React from "react";
import HomeCarousel from "../../components/Home/Carousel/HomeCarousel";
import HomeTestimonials from "../../components/Home/Testimonials/HomeTestimonials";
import HomeProducts from "../../components/Home/Products/HomeProducts";
import HomeFeatures from "../../components/Home/Features/HomeFeatures";

const HomePage = () => {
    return (
        <React.Fragment>
            <HomeCarousel />
            <Container maxW={"8xl"}>
                <HomeTestimonials />
                <HomeProducts title="New Arrivals" />
                <HomeProducts title="Great Offers !" simplified={true} />
                {/* Giving Some Space */}
                <Box py={20} />
                <HomeProducts title="Top Selling Products" simplified={true} />
                <HomeFeatures />
            </Container>
        </React.Fragment>
    );
};

export default HomePage;
