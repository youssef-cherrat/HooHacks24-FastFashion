import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar'; // Adjust the path as necessary
// import { BannerSearch } from './components/BannerSearch'; // Comment out
// import { ResultCards } from './components/ResultCards'; // Comment out
import About from "./pages/About"; // Comment out
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./components/ProductList";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              
            </>
          } />
          {/* Temporarily remove other routes to isolate the issue */}
        </Routes>
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
