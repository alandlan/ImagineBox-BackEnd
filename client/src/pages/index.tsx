import { Flex, Icon, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Header} from '../components/Header'
import { SideBar } from '../components/Sidebar'
import { useSidebarDrawer } from '../context/SidebarDrawerContext'

export default function Home(){

  const { onOpen } = useSidebarDrawer()

  return(

    <>

    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <h1>Vitrine</h1>
      </Flex>
    </Flex>
    </>
  )
}