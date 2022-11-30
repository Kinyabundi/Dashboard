import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { MoralisProvider } from "react-moralis"


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ChakraProvider> 
      <MoralisProvider appId="" serverUrl="">
      <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  )
 
}
