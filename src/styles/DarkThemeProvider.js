import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(state => state.darkMode.isDarkMode);
  return (
    <ThemeProvider theme={darkThemeEnabled ? theme.dark : theme.light}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
