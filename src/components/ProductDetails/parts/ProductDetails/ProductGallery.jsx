import { Flex, Image } from "@chakra-ui/react";
const Gallery = () => {
    return (
        <Flex>
            <Image
                rounded={"md"}
                alt={"product image"}
                src={
                    "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
                }
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
        </Flex>
    );
};

export default Gallery;
