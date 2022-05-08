import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppRouter } from './Routes'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle />
        <AppRouter />
    </React.StrictMode>
)
