import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Top from './pages/top';
import SignIn from './pages/login';
import SignUp from './pages/register';
import ChessPvc from './pages/chessPvc';
import ChessPvp from './pages/chessPvp';
import Online from './pages/online';
import Chat from './pages/chat';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={Top} />
          <Route path='/top' component={Top} />
          <Route path='/login' component={SignIn} />
          <Route path='/register' component={SignUp} />
          <Route path='/chessPvc' component={ChessPvc} />
          <Route path='/chessPvp' component={ChessPvp} />
          <Route path='/online' component={Online} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
