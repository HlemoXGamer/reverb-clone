import React from "react";

import TheFooter from "../components/UI/TheFooter";
import TheHeader from "../components/UI/TheHeader/TheHeader";
import TheRoutes from "../TheRoutes";

const MainLayout = () => {
    return (
        <React.Fragment>
            <TheHeader />
            <TheRoutes />
            <TheFooter />
        </React.Fragment>
    );
};

export default MainLayout;
