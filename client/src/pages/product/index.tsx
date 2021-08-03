import { Box, Button, Flex, Heading, Icon, SimpleGrid, Text, Image, Center, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, } from "@chakra-ui/react";
import { RiAddLine, RiPriceTag3Fill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function ProductList(){
    return(
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                <Box flex="1" borderRadius={8} bg="orange.300" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Produtos</Heading>

                        <Button as="a" size="sm" fontSize="sm" colorScheme="orange.300" 
                            leftIcon={<Icon as={RiAddLine}></Icon>}
                        >Novo</Button>
                    </Flex>
                    <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} >
                        <Box borderRadius={8} bg="orange.200">
                            <Center borderRadius={8}>
                                <Image boxSize="150px" src="deadpool.jpg" alt="deadpool.jpg" />
                            </Center>
                            <Text align="center" fontSize="20" p={2}>Miniatura DeadPool </Text>
                            <Text p={4}><Icon as={RiPriceTag3Fill} /> R$59,99</Text>   
                        </Box>
                        <Box borderRadius={8} bg="orange.200">
                            <Center borderRadius={8}>
                                <Image boxSize="150px" src="deadpool.jpg" alt="deadpool.jpg" />
                            </Center>
                            <Text align="center" fontSize="20" p={2}>Miniatura DeadPool</Text>
                            <Text p={4}><Icon as={RiPriceTag3Fill} /> R$59,99</Text>   
                        </Box>
                        <Box borderRadius={8} bg="orange.200">
                            <Center borderRadius={8}>
                                <Image boxSize="150px" src="deadpool.jpg" alt="deadpool.jpg" />
                            </Center>
                            <Text align="center" fontSize="20" p={2}>Miniatura DeadPool</Text>
                            <Text p={4}><Icon as={RiPriceTag3Fill} /> R$59,99</Text>   
                        </Box>
                        <Box borderRadius={8} bg="orange.200">
                            <Center borderRadius={8}>
                                <Image boxSize="150px" src="deadpool.jpg" alt="deadpool.jpg" />
                            </Center>
                            <Text align="center" fontSize="20" p={2}>Miniatura DeadPool</Text>
                            <Text p={4}><Icon as={RiPriceTag3Fill} /> R$59,99</Text>   
                        </Box>
                        <Box borderRadius={8} bg="orange.200">
                            <Center borderRadius={8}>
                                <Image boxSize="150px" src="deadpool.jpg" alt="deadpool.jpg" />
                            </Center>
                            <Text align="center" fontSize="20" p={2}>Miniatura DeadPool</Text>
                            <Text p={4}><Icon as={RiPriceTag3Fill} /> R$59,99</Text>   
                        </Box>
                        
                    </SimpleGrid>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}