import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function SideBar(){

    const { isOpen, onClose} = useSidebarDrawer()
    
    const isDrawerSidebar = useBreakpointValue({
        base: false,
        lg: true
    })

    if(!isDrawerSidebar){
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="orange.200" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                        <DrawerFooter>
                            <Button>Teste</Button>
                        </DrawerFooter>
                    </DrawerContent>
                    
                </DrawerOverlay>
            </Drawer> 
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    )
}