import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import QueryProviderClient from "./QueryProviderClient.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProviderClient>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryProviderClient>
  </React.StrictMode>
);
