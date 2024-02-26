import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ConfigProvider, AdaptivityProvider} from '@vkontakte/vkui'
import bridge from '@vkontakte/vk-bridge';
import './index.css'

// Отправляет событие инициализации нативному клиенту
bridge.send("VKWebAppInit");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ConfigProvider>
  <AdaptivityProvider>
    <App />
  </AdaptivityProvider>
</ConfigProvider>

);


