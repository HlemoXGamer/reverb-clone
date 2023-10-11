import React from "react";

import TopNav from "./parts/TopNav";
import LowerNav from "./parts/LowerNav";

import { Box } from "@chakra-ui/layout";

const TheHeader = () => {
    return (
        <React.Fragment>
            <Box m={2}>
                <TopNav />
                <LowerNav />
            </Box>
        </React.Fragment>
    );
};

export default TheHeader;
