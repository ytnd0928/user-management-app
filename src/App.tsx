import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/Theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
