import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './providers/redux/store.ts';
import { injectStore } from './api/axiosInstance.ts';
import * as serviceWorker from './serviceWorker.js';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

injectStore(store);
serviceWorker.register();
