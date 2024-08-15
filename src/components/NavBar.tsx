import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/OnDaRox_Logo.png'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' margin='7px' borderRadius='15px'></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar