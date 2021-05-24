import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './Login';
import styled from "styled-components";
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
          <AppLoadingContents>
              <img src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif" alt="" />

          </AppLoadingContents>
      </AppLoading>
    )
  }

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

const AppLoading = styled.div`

`;

const AppLoadingContents = styled.div`
  
`;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;