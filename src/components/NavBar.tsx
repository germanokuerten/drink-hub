import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/OnDaRox_Logo.png'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' margin='7px' borderRadius='15px'></Image>
        <Text>Nav Bar</Text>
    </HStack>
  )
}

export default NavBar