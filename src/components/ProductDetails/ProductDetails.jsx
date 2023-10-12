// Chakra Components
import { Container, Stack, SimpleGrid } from "@chakra-ui/react";

// Components
import ProductGallery from "./parts/ProductDetails/ProductGallery";
import ProductHeader from "./parts/ProductDetails/ProductHeader";
import ProductBody from "./parts/ProductDetails/ProductBody";
import ProductFooter from "./parts/ProductDetails/ProductFooter";

const ProductDetailSection = () => {
    // TODO: Implement Gallery View Instead Of Image
    return (
        <Container maxW={"8xl"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
            >
                <ProductGallery />
                <Stack spacing={{ base: 6, md: 10 }}>
                    <ProductHeader />
                    <ProductBody />
                    <ProductFooter />
                </Stack>
            </SimpleGrid>
        </Container>
    );
};

export default ProductDetailSection;
