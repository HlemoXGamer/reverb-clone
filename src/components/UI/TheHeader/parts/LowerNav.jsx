/* eslint-disable react/prop-types */
import React from "react";

// Chakra Components
import {
    Box,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    Container,
} from "@chakra-ui/react";

// Components
import DesktopSubNav from "./DesktopSubNav";

// Mock
import NAV_ITEMS from "../../../../mock/NAV_ITEMS.json";

const LowerNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    return (
        <React.Fragment>
            <Container maxW={"8xl"}>
                <Stack direction={"row"} spacing={4}>
                    {NAV_ITEMS.map((navItem, index) => (
                        <Box key={navItem.label + index}>
                            <Popover
                                trigger={"hover"}
                                placement={"bottom-start"}
                            >
                                <PopoverTrigger>
                                    <Box
                                        as="a"
                                        p={2}
                                        href={navItem.href ?? "#"}
                                        fontSize={"sm"}
                                        fontWeight={500}
                                        color={linkColor}
                                        _hover={{
                                            textDecoration: "none",
                                            color: linkHoverColor,
                                        }}
                                    >
                                        {navItem.label}
                                    </Box>
                                </PopoverTrigger>

                                {navItem.children && (
                                    <PopoverContent
                                        border={0}
                                        boxShadow={"xl"}
                                        bg={popoverContentBgColor}
                                        p={4}
                                        rounded={"xl"}
                                        minW={"sm"}
                                    >
                                        <Stack>
                                            {navItem.children.map((child) => (
                                                <DesktopSubNav
                                                    key={child.label}
                                                    {...child}
                                                />
                                            ))}
                                        </Stack>
                                    </PopoverContent>
                                )}
                            </Popover>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </React.Fragment>
    );
};

export default LowerNav;
