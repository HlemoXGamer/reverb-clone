import React from "react";

// Chakra Component
import { Heading } from "@chakra-ui/react";

const TheLogo = () => {
    return (
        <React.Fragment>
            <Heading as="h1" size="lg" noOfLines={1}>
                The Logo
            </Heading>
        </React.Fragment>
    );
};

export default TheLogo;
