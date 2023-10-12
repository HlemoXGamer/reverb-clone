/* eslint-disable react/prop-types */

import { Text, useColorModeValue } from "@chakra-ui/react";
const TestimonialText = (props) => {
    const { children } = props;

    return (
        <Text
            textAlign={"center"}
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={"sm"}
        >
            {children}
        </Text>
    );
};

export default TestimonialText;
