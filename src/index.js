import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';
import Routers from './Routers';
import DarkThemeProvider from './styles/DarkThemeProvider';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <DarkThemeProvider>
      <GlobalStyle />
      <Routers />
    </DarkThemeProvider>
  </Provider>,
  document.getElementById('root')
);
