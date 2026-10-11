import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

const root = document.getElementById('root');
const app = (
  <StrictMode>
   <BrowserRouter>
       <App/>
   </BrowserRouter>
  </StrictMode>
);

// Pages are pre-rendered at build time (scripts/prerender.js); hydrate them instead of re-rendering.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
