import React from "react";

// Parts Components
import TopNav from "./parts//TopNav/TopNav";
import LowerNav from "./parts//LowerNav/LowerNav";

// Chakra Components
import { Box } from "@chakra-ui/layout";

const TheHeader = () => {
    return (
        <React.Fragment>
            <Box>
                <TopNav />
                <LowerNav />
            </Box>
        </React.Fragment>
    );
};

export default TheHeader;
