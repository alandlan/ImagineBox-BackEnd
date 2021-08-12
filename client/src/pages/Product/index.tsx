import { Box, Button, Flex, Heading, Icon, SimpleGrid, Text, Image, Center, Spinner, Img, } from "@chakra-ui/react";
import { RiAddLine, RiPriceTag3Fill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";
import { useQuery } from 'react-query'

export default function ProductList(){
    const {data, isLoading, error} = useQuery('products', async () => {
        const response = await fetch('http://localhost:3333/products')
        const data = await response.json()

        return data;
    })


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
                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados.</Text>
                        </Flex>
                    ) : (
                        <>
                        <SimpleGrid id="teste" columns={[1, 2, 3, 4]} spacing={10} >
                            {data.map(product => {
                                return (
                                    <Box key={product.Id} borderRadius={8} bg="orange.200">
                                        <Center borderRadius={8}>
                                            <Image boxSize="150px" src="http://localhost:3333/tmp/product/8b1600423ad76d84b23152d75e0423de-spiderman.jpg" alt="deadpool.jpg" />
                                        </Center>
                                        <Text align="center" fontSize="20" p={2}>{product.Name}</Text>
                                        <Text p={4}><Icon as={RiPriceTag3Fill} /> R$ {product.Price}</Text>   
                                    </Box>  
                                )

                            })}
                                                     
                        </SimpleGrid>
                        <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}