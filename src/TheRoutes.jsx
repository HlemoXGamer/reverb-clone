// MyRoutes.jsx
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default MyRoutes;
