import React from "react";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
    return (
        <React.Fragment>
            <InputGroup borderRadius={5} width="2xl">
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
