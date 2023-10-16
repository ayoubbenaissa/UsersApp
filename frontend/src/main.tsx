import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';

// instantiate query-client for React-Query:
const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
)

