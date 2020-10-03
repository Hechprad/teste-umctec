import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import store from 'store'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import Routes from 'routes'

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default App
