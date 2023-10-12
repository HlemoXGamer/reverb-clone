// Chakra Components
import { Stack, useColorModeValue } from "@chakra-ui/react";

// Components
import MobileNavItem from "./MobileNavItem";

// Mocks
import NAV_ITEMS from "../../../../../../mock/NAV_ITEMS.json";

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem, index) => (
                <MobileNavItem key={navItem.label + index} {...navItem} />
            ))}
        </Stack>
    );
};

export default MobileNav;
