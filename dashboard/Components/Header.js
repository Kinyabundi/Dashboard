import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header ({user, logout, isLoggingOut}) {
    return (
       <header>
        <Flex px= "10" py = "6" justifyContent="space-between" bg= "purple.400" color = "white" >
            <Center>
                <Text fontSize= "xl" 
                 fontWeight="bold">DashBoard</Text>
            </Center>
            <Center>
                <Text>{user.getUsername()}</Text>
                <Button ml = "4" colorScheme= "purple" 
                disable = {isLoggingOut}
                onClick={logout}>LogOut</Button>
            </Center>
        </Flex>
       </header>
    )
}