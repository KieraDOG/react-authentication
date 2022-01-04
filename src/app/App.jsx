import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Routes,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import Dashboard from './Dashboard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #F0F1F3;
`;

const Box = styled.div`
  width: 400px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 12px 40px rgb(0 0 0 / 15%);
  padding: 40px;
`;

const App = function App() {
  const [user, setUser] = useState();
  const [authToken, setAuthToken] = useState(localStorage.getItem('AUTH_TOKEN'));

  useEffect(() => {
    axios.get('http://localhost:8000/auth', {
      headers: {
        'X-Auth-Token': authToken,
      },
    })
      .then((response) => setUser(response.data))
      .catch(() => setAuthToken());
  }, []);

  if (!user && authToken) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Container>
      <Box>
        <Routes>
          <Route path="/auth/log-in" element={(<LogInForm user={user} setUser={setUser} />)} />
          <Route path="/auth/sign-up" element={(<SignUpForm />)} />
          <Route path="/user/dashboard" element={(<Dashboard user={user} />)} />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
