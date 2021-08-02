import { Flex,Input,Button, Stack, FormLabel,FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100wh" h="100vh" align="center" justify="center">
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        bg="orange.300"
        p="8"
        borderRadius={8}
        flexDir="column"
        >
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input 
                type="email" 
                name="email"
                focusBorderColor="orange.900" 
                bgColor="orange.200"
                variant="filled"
                _hover={{
                  bgColor:"orange.200"
                }}
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input 
                type="password" 
                name="password" 
                focusBorderColor="orange.900" 
                bgColor="orange.200"
                variant="filled"
                _hover={{
                  bgColor:"orange.200"
                }}
                />
            </FormControl>
            </Stack>

          <Button type="submit" mt="6" size="lg" colorScheme="orange">Entrar</Button>
      </Flex>
    </Flex>
  )
} 
