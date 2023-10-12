import {
    Stack,
    StackDivider,
    VStack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

const ProductBody = () => {
    return (
        <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
                <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                />
            }
        >
            <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={"lg"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic,
                    ipsum maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
                </Text>
            </VStack>
        </Stack>
    );
};

export default ProductBody;
