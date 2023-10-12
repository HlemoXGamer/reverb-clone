import {
    Box,
    Container,
    Heading,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
} from "@chakra-ui/react";
import React from "react";

import Banner from "../../../../assets/Images/discount-banner-1.jpg";
import { EmailIcon } from "@chakra-ui/icons";

const DiscountSection = () => {
    return (
        <React.Fragment>
            <Box
                backgroundImage={`url(${Banner})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                p={20}
            >
                <Container maxW={"8xl"} textAlign={"center"}>
                    <Box>
                        <Heading fontSize={{ base: "3xl", md: "4xl" }}>
                            Get{" "}
                            <Text as={"span"} color="#ffba38">
                                20%
                            </Text>{" "}
                            Off Discount Coupon
                        </Heading>
                        <Text fontSize={"xl"}>By Subscribe our Newsletter</Text>
                    </Box>
                    <Box m={"auto"} mt={16} maxW={"xl"}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" p={6}>
                                <EmailIcon />
                            </InputLeftElement>
                            <Input
                                type="tel"
                                placeholder="Enter your email address"
                                background={"#fff"}
                                p={6}
                                pl={10}
                                borderTopRightRadius={"none"}
                                borderBottomEndRadius={"none"}
                            />
                            <Button
                                colorScheme="teal"
                                rounded={"none"}
                                height={"49px"}
                                px={8}
                            >
                                Get The Coupon
                            </Button>
                        </InputGroup>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default DiscountSection;
