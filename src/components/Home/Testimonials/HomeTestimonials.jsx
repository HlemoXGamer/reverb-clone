/* eslint-disable react/prop-types */

// Chakra Components
import {
    Box,
    Heading,
    Text,
    Stack,
    Container,
    useColorModeValue,
} from "@chakra-ui/react";

// Components
import Testimonial from "./parts/Testimonial";
import TestimonialContent from "./parts/TestimonialContent";
import TestimonialHeading from "./parts/TestimonialHeading";
import TestimonialText from "./parts/TestimonialText";
import TestimonialAvatar from "./parts/TestimonialAvatar";

// Mocks
import testimonialsData from "../../../mock/TESTIMONIALS.json";

const HomeTestimonials = () => {
    return (
        <Box bg={useColorModeValue("gray.100", "gray.700")}>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={"center"}>
                    <Heading>Our Clients Speak</Heading>
                    <Text>
                        We have been working with clients around the world
                    </Text>
                </Stack>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <Testimonial key={index}>
                            <TestimonialContent>
                                <TestimonialHeading>
                                    {testimonial.heading}
                                </TestimonialHeading>
                                <TestimonialText>
                                    {testimonial.text}
                                </TestimonialText>
                            </TestimonialContent>
                            <TestimonialAvatar
                                src={testimonial.avatarSrc}
                                name={testimonial.name}
                                title={testimonial.title}
                            />
                        </Testimonial>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default HomeTestimonials;
