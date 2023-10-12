import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const ProductHeader = () => {
    return (
        <Box as={"header"}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
                Automatic Watch
            </Heading>
            <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
            >
                $350.00 USD
            </Text>
        </Box>
    );
};

export default ProductHeader;
