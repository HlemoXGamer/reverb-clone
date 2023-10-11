import React from "react";
import { Link } from "react-router-dom";

import TheLogo from "../../../Common/TheLogo";
import SearchBar from "../../../Common/SearchBar";

import { Box, Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const TopNav = () => {
    return (
        <React.Fragment>
            <Container maxW="xxl">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box display="flex" gap="5">
                        <TheLogo />
                        <SearchBar />
                        <Button colorScheme="blue" variant="outline" px="5">
                            SELL
                        </Button>
                    </Box>
                    <Box display="flex" gap="5">
                        <BsCart2 size={30} />
                        <AiOutlineHeart size={30} />
                        <BiUser size={30} />
                    </Box>
                    <Box display="flex" gap={5}>
                        <Button>
                            <Link to="/signup">Sign In</Link>
                        </Button>
                        <Button>
                            <Link to="/signin">Sign Up</Link>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default TopNav;
