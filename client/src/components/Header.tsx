import { Flex, Text, Image, Input,Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

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

        </Flex>
    )
}