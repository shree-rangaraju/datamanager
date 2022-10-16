import React from 'react'
import { createRoot } from 'react-dom/client'
import ProductionEntry from './ProductionEntry'


const root = createRoot(document.querySelector("#root"))
root.render(
    <React.StrictMode>
        <ProductionEntry />
    </React.StrictMode>
)