import React from "react";

import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    TabIndicator,
    Box,
    Container,
} from "@chakra-ui/react";

import Features from "./TabPanels/Features";
import ProductDetails from "./TabPanels/ProductDetails";

const TabNavigation = () => {
    return (
        <React.Fragment>
            <Box backgroundColor={"#f8f8f8"} p={10}>
                <Container maxW={"8xl"}>
                    <Tabs position="relative" variant="unstyled">
                        <TabList>
                            <Tab>Features</Tab>
                            <Tab>Product Details</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="blue.500"
                            borderRadius="1px"
                        />
                        <TabPanels pt={8}>
                            <TabPanel>
                                <Features />
                            </TabPanel>
                            <TabPanel>
                                <ProductDetails />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default TabNavigation;
