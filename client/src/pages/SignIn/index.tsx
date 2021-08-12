import { Flex,Button, Stack, FormLabel,FormControl } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'

export default function SignIn() {
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

            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Password" />
            
          </Stack>

          <Button type="submit" mt="6" size="lg" colorScheme="orange">Entrar</Button>
      </Flex>
    </Flex>
  )
} 