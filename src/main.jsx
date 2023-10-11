import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

// Global App
import App from "./App.jsx";
import "./index.css";

// Redux Implementation
import { Provider } from "react-redux";
import store from "./store/store.js";

// Chakra Ui Implementation
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </Provider>
        </Router>
    </React.StrictMode>
);
