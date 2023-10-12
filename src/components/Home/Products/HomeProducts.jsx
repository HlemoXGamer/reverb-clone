/* eslint-disable react/prop-types */
// Chakra Components
import { Grid, GridItem, Box } from "@chakra-ui/react";

// Components
import ProductCard from "./ProductCard/ProductCard";

// Mocks
import Products from "../../../mock/PRODUCTS.json";
import React from "react";
import { Link } from "react-router-dom";
function HomeProducts({ title, simplified = false }) {
    return (
        <React.Fragment>
            <Box py={20}>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    pb={7}
                >
                    <Box
                        as={"h2"}
                        fontSize={"3xl"}
                        fontWeight={"extrabold"}
                        lineHeight={"1.125rem"}
                    >
                        {title}
                    </Box>
                    <Link>View More</Link>
                </Box>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",
                    }}
                    gap={10}
                >
                    {Products.slice(0, simplified ? 4 : Products.length).map(
                        (product, index) => (
                            <GridItem colSpan={1} key={index}>
                                <ProductCard product={product} />
                            </GridItem>
                        )
                    )}
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default HomeProducts;
