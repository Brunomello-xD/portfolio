import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'

import { queryClient } from './services/queryClient'
import { AppRouter } from './Routes'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <AppRouter />
        </QueryClientProvider>
    </React.StrictMode>
)
