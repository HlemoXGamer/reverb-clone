/* eslint-disable react/prop-types */
import {
    Box,
    Flex,
    Text,
    Stack,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    Container,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

const NAV_ITEMS = [
    {
        label: "All Categories",
        children: [
            {
                label: "Cameras",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "Lenses",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
        ],
    },
    {
        label: "Home",
        children: [
            {
                label: "Cameras",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "Lenses",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
        ],
    },
    {
        label: "Shop",
        children: [
            {
                label: "Cameras",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "Lenses",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
        ],
    },
    {
        label: "About",
    },
    {
        label: "Blog",
    },
    {
        label: "Contact",
    },
    {
        label: "All Categories",
        children: [
            {
                label: "Cameras",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "Lenses",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
        ],
    },
    {
        label: "Home",
        children: [
            {
                label: "Cameras",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "Lenses",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
        ],
    },
    {
        label: "Shop",
        children: [
            {
                label: "Cameras",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "Lenses",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
        ],
    },
    {
        label: "About",
    },
    {
        label: "Blog",
    },
    {
        label: "Contact",
    },
];

const LowerNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    return (
        <React.Fragment>
            <Container maxW={"1330px"} p={0}>
                <Stack direction={"row"} spacing={4} m={5}>
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

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Box
            as="a"
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Box>
    );
};

export default LowerNav;
