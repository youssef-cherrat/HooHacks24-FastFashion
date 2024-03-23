import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ProductList from "./components/ProductList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );
}

export default App;
