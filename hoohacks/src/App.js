import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar'; // Adjust the path as necessary
import { BannerSearch } from './components/BannerSearch'; // Comment out
import { SearchBar } from './components/SearchBar';
// import { ResultCards } from './components/ResultCards'; // Comment out
import About from "./pages/About"; // Comment out
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="app-content"> {/* Flex container */}
          <Container className="banner-search-container">
            <BannerSearch />
          </Container>
          <Container className="search-bar-container">
            <SearchBar />
          </Container>
        </div>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
