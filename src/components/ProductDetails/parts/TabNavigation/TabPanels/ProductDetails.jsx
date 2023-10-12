import { Box, Text, List, ListItem, useColorModeValue } from "@chakra-ui/react";

const ProductDetails = () => {
    return (
        <Box>
            <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
            >
                Product Details
            </Text>

            <List spacing={2}>
                <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                        Between lugs:
                    </Text>{" "}
                    20 mm
                </ListItem>
                <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                        Bracelet:
                    </Text>{" "}
                    leather strap
                </ListItem>
                <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                        Case:
                    </Text>{" "}
                    Steel
                </ListItem>
                <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                        Case diameter:
                    </Text>{" "}
                    42 mm
                </ListItem>
                <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                        Dial color:
                    </Text>{" "}
                    Black
                </ListItem>
                <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                        Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                </ListItem>
                <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                        Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                </ListItem>
            </List>
        </Box>
    );
};

export default ProductDetails;
