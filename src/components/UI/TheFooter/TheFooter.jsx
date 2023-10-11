/* eslint-disable react/prop-types */

// Chakara Components
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

// React Icons
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// Components
import TheLogo from "../../Common/TheLogo";
import ListHeader from "./parts/ListHeader";
import SocialButton from "./parts/SocialButton";

const TheFooter = () => {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container as={Stack} maxW={"8xl"} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={"flex-start"}>
                        <ListHeader>Company</ListHeader>
                        <Box as="a" href={"#"}>
                            About Us
                        </Box>
                        <Box as="a" href={"#"}>
                            Blog
                        </Box>
                        <Box as="a" href={"#"}>
                            Careers
                        </Box>
                        <Box as="a" href={"#"}>
                            Contact Us
                        </Box>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>Support</ListHeader>
                        <Box as="a" href={"#"}>
                            Help Center
                        </Box>
                        <Box as="a" href={"#"}>
                            Safety Center
                        </Box>
                        <Box as="a" href={"#"}>
                            Community Guidelines
                        </Box>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>Legal</ListHeader>
                        <Box as="a" href={"#"}>
                            Cookies Policy
                        </Box>
                        <Box as="a" href={"#"}>
                            Privacy Policy
                        </Box>
                        <Box as="a" href={"#"}>
                            Terms of Service
                        </Box>
                        <Box as="a" href={"#"}>
                            Law Enforcement
                        </Box>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <TheLogo />
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}
            >
                <Container
                    as={Stack}
                    maxW={"8xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ md: "space-between" }}
                    align={{ md: "center" }}
                >
                    <Text>© 2022 Softigital. All rights reserved</Text>
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton label={"Twitter"} href={"#"}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={"YouTube"} href={"#"}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={"Instagram"} href={"#"}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default TheFooter;
