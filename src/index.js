import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoutingApp from './RoutingApp';

// 1. Uncomment and adjust the path below if you are actually using a service worker.
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// 2. Uncomment if you intend to render RoutingApp instead of App.
// import RoutingApp from './RoutingApp'; 

const startApp = () => {
  // 3. React 18 requires createRoot instead of ReactDOM.render
  const container = document.getElementById('root');
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <RoutingApp />
    </React.StrictMode>
  );

  // 4. Call your service worker here if you imported it above
  // serviceWorkerRegistration.register();
}

// 5. Cordova check stays the same
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


