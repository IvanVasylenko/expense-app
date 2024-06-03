import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, persistor } from './store';

import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
