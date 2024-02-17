import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CyclesContextProvider>
          <RouterProvider router={router} />
        </CyclesContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
