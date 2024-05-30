import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { BannerSearch } from './components/BannerSearch';
import { SearchBar } from './components/SearchBar';
import About from './pages/About';
import { Container } from 'react-bootstrap';
import './App.css';
import Faq from './pages/Faq';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <>
                  <div className="app-content">
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
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/protected"
              element={
                <Authenticator>
                  {({ signOut, user }) => (
                    <div>
                      <p>Welcome, {user.username}</p>
                      <button onClick={signOut}>Sign out</button>
                    </div>
                  )}
                </Authenticator>
              }
            />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
