// Chakra Components
import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    Icon,
} from "@chakra-ui/react";

// Components
import Card from "./Card";

// Mocks
import {
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
    FcAbout,
} from "react-icons/fc";

const cardData = [
    {
        heading: "Heading 1",
        icon: <Icon as={FcAssistant} w={10} h={10} />,
        description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
        href: "#",
    },
    {
        heading: "Heading 2",
        icon: <Icon as={FcCollaboration} w={10} h={10} />,
        description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
        href: "#",
    },
    {
        heading: "Heading 3",
        icon: <Icon as={FcDonate} w={10} h={10} />,
        description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
        href: "#",
    },
    {
        heading: "Heading 4",
        icon: <Icon as={FcManager} w={10} h={10} />,
        description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
        href: "#",
    },
    {
        heading: "Heading 5",
        icon: <Icon as={FcAbout} w={10} h={10} />,
        description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
        href: "#",
    },
];

const HomeFeatures = () => {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                <Heading
                    fontSize={{ base: "2xl", sm: "4xl" }}
                    fontWeight={"bold"}
                >
                    Short heading
                </Heading>
                <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis obcaecati ut cupiditate pariatur, dignissimos,
                    placeat amet officiis.
                </Text>
            </Stack>

            <Container maxW={"5xl"} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            heading={card.heading}
                            icon={card.icon}
                            description={card.description}
                            href={card.href}
                        />
                    ))}
                </Flex>
            </Container>
        </Box>
    );
};

export default HomeFeatures;
