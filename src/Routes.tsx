import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Landing } from './pages/Landing'

export function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
    )
}
