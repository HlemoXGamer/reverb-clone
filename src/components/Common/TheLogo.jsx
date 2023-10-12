/* eslint-disable react/prop-types */
import React from "react";

// Chakra Component
import { Heading } from "@chakra-ui/react";

const TheLogo = ({ display }) => {
    return (
        <React.Fragment>
            <Heading as="h1" size="lg" noOfLines={1} display={display}>
                Logo
            </Heading>
        </React.Fragment>
    );
};

export default TheLogo;
