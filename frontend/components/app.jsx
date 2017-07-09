import React from 'react';
import SessionFormContainer from './session_form/session_form_container';

const App = ({ children }) => (
  <section id="main">
    <h1>Tumpani</h1>
    <h3>Discover All SF Attractions in one App</h3>
    <SessionFormContainer />
    { children }
  </section>
);

export default App;
