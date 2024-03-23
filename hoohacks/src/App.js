import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar"; // Adjust the path as necessary
import { BannerSearch } from "./components/BannerSearch"; // Comment out
import { SearchBar } from "./components/SearchBar";
// import { ResultCards } from './components/ResultCards'; // Comment out
import About from "./pages/About"; // Comment out
import { Container } from "react-bootstrap";
import "./App.css";
import FAQ from "./components/FAQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Results from "./pages/Results";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <div className="app-content">
                    {" "}
                    {/* Flex container */}
                    <Container className="banner-search-container">
                      <BannerSearch />
                    </Container>
                    <Container className="search-bar-container">
                      <SearchBar />
                    </Container>
                  </div>
                  <Results />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
