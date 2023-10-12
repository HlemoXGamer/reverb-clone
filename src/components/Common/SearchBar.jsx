import React from "react";

// Chakara Components
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

// Chakara Icons
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
    return (
        <React.Fragment>
            <InputGroup
                borderRadius={5}
                width={{
                    base: "100%",
                    md: "100%",
                    lg: "md",
                    xl: "2xl",
                    "2xl": "2xl",
                }}
            >
                <Input
                    type="text"
                    placeholder="Search..."
                    border="1px solid #949494"
                />
                <InputRightElement pointerEvents="pointer">
                    <Search2Icon color="gray.600" />
                </InputRightElement>
            </InputGroup>
        </React.Fragment>
    );
};

export default SearchBar;
