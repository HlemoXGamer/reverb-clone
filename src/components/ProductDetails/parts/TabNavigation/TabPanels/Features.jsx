import {
    Box,
    Text,
    SimpleGrid,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react";

const Features = () => {
    return (
        <Box>
            <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
            >
                Features
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{" "}
                    <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                </List>
            </SimpleGrid>
        </Box>
    );
};

export default Features;
