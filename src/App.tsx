import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { darkTheme, lightTheme } from './theme/theme';
// import updateSW from './utils/updateSW';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // updateSW();

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
