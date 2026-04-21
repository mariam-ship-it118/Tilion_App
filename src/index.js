import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoutingApp from './RoutingApp';







const startApp = () => {
  
  const container = document.getElementById('root');
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <RoutingApp />
    </React.StrictMode>
  );

  
  
}


if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}




reportWebVitals();


