import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "../Components/Header"
export default function Home() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut} = useMoralis();
  //console.log(isAuthenticated)
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login|DashBoard</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, teal,400,purple,300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Your Wallet DashBoard
          </Text>
          <Button colorScheme="purple" size="lg" mt="6" onClick = {() => authenticate (
            // signingMessage: "Sign to login to Your DashBoard"
          )}>
            Login
          </Button>
        </Flex>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Flex direction= "column" width = "100vw" height= "100vh">
        <Header user = {user}  logout = {logout} isLoggingOut = {isLoggingOut} />
      </Flex>
    </>
  );
}
