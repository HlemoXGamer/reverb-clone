import MainLayout from "./layout/MainLayout";
import { ChakraProvider } from "@chakra-ui/react";
const App = () => {
    return (
        <ChakraProvider>
            <MainLayout />
        </ChakraProvider>
    );
};

export default App;
