import { Box, Stack } from "@chakra-ui/react";
import { RiGift2Fill } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBar(){
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="COLECIONÁVEIS">
                    <NavLink icon={RiGift2Fill}>Marvel</NavLink>
                    <NavLink icon={RiGift2Fill}>DC</NavLink>
                </NavSection>
                <NavSection title="TABULEIROS">
                    <NavLink icon={RiGift2Fill}>Dangers&Dragons</NavLink>
                </NavSection>
                
            </Stack>
        </Box>
    )
}