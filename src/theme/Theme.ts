import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        //ここにCSSを書いていく
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});
export default theme;
