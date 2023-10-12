import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFound from "./pages/404";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default MyRoutes;
