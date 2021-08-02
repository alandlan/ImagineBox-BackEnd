import { Flex } from '@chakra-ui/react'
import { Header} from '../components/Header'
import { SideBar } from '../components/Sidebar'

export default function Home(){
  return(
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <h1>Vitrine</h1>
      </Flex>
    </Flex>
  )
}