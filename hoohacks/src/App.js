import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar'; // Adjust the path as necessary
// import { BannerSearch } from './components/BannerSearch'; // Comment out
// import { ResultCards } from './components/ResultCards'; // Comment out
// import About from "./pages/About"; // Comment out
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              {/* <About /> */}
            </>
          } />
          {/* Temporarily remove other routes to isolate the issue */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
