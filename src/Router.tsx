import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/pages/home/home'
import { Checkout } from './components/pages/checkout/checkout'
import { Success } from './components/pages/success-page/success'

// função para alterar a url de forma que viabilize a navegação entre as páginas

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<Success />} />
        </Routes>
    )
} 