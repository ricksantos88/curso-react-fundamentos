import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './app'

const rootEl = document.getElementById('root')
document.body.appendChild(rootEl)

const root = createRoot(rootEl)
root.render(<App />)
