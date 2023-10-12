/* eslint-disable react/prop-types */

// Chakra Components
import {
    Box,
    Flex,
    IconButton,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure,
    Container,
} from "@chakra-ui/react";

// Chakra Icons
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// Components
import DesktopNav from "./parts/DesktopNax";
import MobileNav from "./parts/MobileNav";
import TheLogo from "../../../../Common/TheLogo";

const LowerNav = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Container as={Stack} maxW={"8xl"}>
            <Box>
                <Flex
                    bg={useColorModeValue("white", "gray.800")}
                    color={useColorModeValue("gray.600", "white")}
                    minH={"60px"}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.900")}
                    align={"center"}
                >
                    <Flex
                        flex={{ base: 1, md: "auto" }}
                        ml={{ base: -2 }}
                        display={{ base: "flex", md: "none" }}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? (
                                    <CloseIcon w={3} h={3} />
                                ) : (
                                    <HamburgerIcon w={5} h={5} />
                                )
                            }
                            variant={"ghost"}
                            aria-label={"Toggle Navigation"}
                        />
                    </Flex>
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: "center", md: "start" }}
                    >
                        <Flex display={{ base: "none", md: "flex" }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>
                    <Flex>
                        <TheLogo
                            display={{
                                base: "-webkit-box",
                                md: "none",
                                lg: "none",
                                xl: "none",
                                "2xl": "none",
                            }}
                        />
                    </Flex>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </Container>
    );
};

export default LowerNav;
