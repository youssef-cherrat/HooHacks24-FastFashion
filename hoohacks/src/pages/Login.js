import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Container } from 'react-bootstrap';
import SavedItems from '../components/SavedItems'; // Ensure you import the SavedItems component
import './Login.css'; // Ensure you import the CSS file

const Login = () => (
  <Container className="login-container">
    <h1>Login</h1>
    <div className="authenticator-wrapper">
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <p>Welcome, {user.username}</p>
            <button onClick={signOut}>Sign out</button>
            {user && <SavedItems user={user} />} {/* Display saved items */}
          </div>
        )}
      </Authenticator>
    </div>
  </Container>
);

export default Login;
