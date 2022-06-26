import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/es/locale/ru_RU';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfigProvider locale={ru_RU}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>
);
