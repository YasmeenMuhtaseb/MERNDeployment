import './App.css';
import {Router} from "@reach/router";
import React, { useState } from 'react';

import AuthorsTable from "./components/AuthorsTable"
import CreateAuthorForm from "./components/CreateAuthorForm"
import UpdateAuthorForm from './components/UpdateAuthorForm';

function App() {

  return (
      <div className="App">
        <Router>
          <AuthorsTable path="/"/>
          <CreateAuthorForm path="/new"/>
          <UpdateAuthorForm path ="/:id/edit"/>
        </Router>
      </div>
  );
}

export default App;