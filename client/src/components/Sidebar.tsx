import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiGift2Fill } from "react-icons/ri";

export function SideBar(){
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="orange.400" fontSize="small">COLECIONÁVEIS</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center" color="orange.400">
                            <Icon as={RiGift2Fill} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Marvel</Text>
                        </Link>
                        <Link display="flex" align="center" color="orange.400">
                            <Icon as={RiGift2Fill} fontSize="20" />
                            <Text ml="4" fontWeight="medium">DC</Text>
                        </Link>
                        
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="orange.400" fontSize="small">TABULEIROS</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                    <Link display="flex" align="center" color="orange.400">
                        <Icon as={RiGift2Fill} fontSize="20" />
                        <Text ml="4" fontWeight="medium">Dangers&Dragons</Text>
                    </Link>
                        
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}