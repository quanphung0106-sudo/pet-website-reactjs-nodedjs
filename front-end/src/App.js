import { createTheme, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import { routes } from '~/routes';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProviderStyles } from './components/ThemeProvider';

function App() {
  const theme = createTheme({
    typography: {
      htmlFontSize: 10,
      fontFamily: ['Nunito', 'sans-serif'].join(','),
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ThemeProviderStyles>
          <GlobalStyles>
            <RouterProvider router={routes} />
          </GlobalStyles>
        </ThemeProviderStyles>
      </ThemeProvider>
    </div>
  );
}

export default App;
