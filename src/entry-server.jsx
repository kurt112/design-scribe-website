/* eslint-disable react-refresh/only-export-components -- build-time SSR entry, never hot-reloaded */
import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './App.jsx';

export {ROUTES, getPageMeta} from './data/seo.js';
export {SITE_URL} from './data/site.js';

export function render(url) {
    return renderToString(
        <StrictMode>
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
        </StrictMode>
    );
}
