import React, { fragment } from 'react';
import GlobalStyle from './styles/global';
import Main from './pages/Main';

const App = () => (
  <fragment>
    <GlobalStyle />
    <Main />
  </fragment>
);

export default App;
