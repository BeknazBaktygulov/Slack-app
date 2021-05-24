import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import styled from "styled-components";
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './Login';

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
      <Header />
      <AppBody>
        <Sidebar />
          <Switch>
          <Route path="/" exact>
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </>
        )}
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;