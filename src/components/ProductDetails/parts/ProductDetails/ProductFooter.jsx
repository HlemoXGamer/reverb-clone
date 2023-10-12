import React from "react";
import { Button, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

const ProductFooter = () => {
    return (
        <React.Fragment>
            <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                }}
            >
                Add to cart
            </Button>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
            >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
            </Stack>
        </React.Fragment>
    );
};

export default ProductFooter;
