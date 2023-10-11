import React from "react";

import TheFooter from "../components/UI/TheFooter";
import TheHeader from "../components/UI/TheHeader/TheHeader";
import MyRoutes from "../TheRoutes";

const MainLayout = () => {
    return (
        <React.Fragment>
            <TheHeader />
            <MyRoutes />
            <TheFooter />
        </React.Fragment>
    );
};

export default MainLayout;
