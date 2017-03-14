import React from 'react';
import SessionFormContainer from './session_form/session_form_container';

const App = ({ children }) => (
  <div>
    <h1>Tumpani</h1>
    <SessionFormContainer />
    { children }
  </div>
);

export default App;
