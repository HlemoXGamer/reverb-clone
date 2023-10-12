import React from "react";

// Components
import TabNavigation from "../../components/ProductDetails/parts/TabNavigation/TabNavigation";
import ProductDetailSection from "../../components/ProductDetails/ProductDetails";
import HomeProducts from "../../components/Home/Products/HomeProducts";
import { Container } from "@chakra-ui/react";
import DiscountSection from "../../components/ProductDetails/parts/DiscountSection/DiscountSection";

const ProductDetails = () => {
    return (
        <React.Fragment>
            <ProductDetailSection />
            <TabNavigation />
            <Container maxW={"8xl"}>
                <HomeProducts title="Related Products" simplified={true} />
            </Container>
            <DiscountSection />
        </React.Fragment>
    );
};

export default ProductDetails;
