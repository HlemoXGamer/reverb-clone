/* eslint-disable react/prop-types */
import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import Rating from "./parts/ProductRating";

function ProductCard({ product }) {
    return (
        <Flex
            w="full"
            alignItems="center"
            justifyContent="center"
            flexDirection={{ base: "column", md: "row" }}
        >
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                transition="0.4s"
                _hover={{
                    transform: `scale(1.01)`,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                {product.isNew && (
                    <Badge
                        size="sm"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    >
                        New
                    </Badge>
                )}

                <Image
                    src={product.imageURL}
                    alt={`Picture of ${product.name}`}
                    roundedTop="lg"
                />
                <Box p="6">
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {product.name}
                    </Box>
                    <Flex justifyContent="space-between" alignContent="center">
                        <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                        />
                        <Box
                            fontSize="2xl"
                            color={useColorModeValue("gray.800", "white")}
                        >
                            <Box as="span" color="gray.600" fontSize="lg">
                                £
                            </Box>
                            {product.price.toFixed(2)}
                        </Box>
                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement="top"
                            color="gray.800"
                            fontSize="1.2em"
                        >
                            <chakra.a href="#">
                                <Icon
                                    as={FiShoppingCart}
                                    h={7}
                                    w={7}
                                    alignSelf="center"
                                />
                            </chakra.a>
                        </Tooltip>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}

export default ProductCard;
