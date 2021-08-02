import { Flex, Text, Image, Input,Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiShoppingCartLine } from 'react-icons/ri'

export function Header(){
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            <Text
                fontSize="3xl"
                fontWeight= "bold"
                letterSpacing="tight"
                w="64"
            >ImagineBox
            <Image src= "box-icon.png" boxSize="50px" display="inline"
                
            />
            </Text>

            <Flex
                    as="label"
                    flex="1"
                    py="4"
                    px="8"
                    ml="6"
                    maxWidth={400}
                    alignSelf="center"
                    color="orange.600"
                    bg="orange.300"
                    position= "relative"
                    borderRadius="full"

                >
                    <Input
                        color="orange.200"
                        variant="unstyled"
                        px="4"
                        mr="4"
                        placeholder="Buscar na plataforma"
                        _placeholder={{color: 'orange.500'}}
                    >
                    </Input>
                    <Icon as={RiSearchLine} fontSize="20"/>
                </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack spacing="4"
                mx="8"
                pr="8"
                py="1"
                color="orange.300"
                borderRightWidth={1}
                borderColor="orange.700">
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiShoppingCartLine} fontSize="20" />
                </HStack>

                <Flex align="center" >
                    <Box mr="4" textAlign="right">
                        <Text>Alan Martins</Text>
                        <Text color="orange.300" fontSize="small">
                            alan4lann@gmail.com
                        </Text>
                    </Box>

                    <Avatar size="md" name="Alan Martins" src="" />
                </Flex>
            </Flex>
        </Flex>
    )
}