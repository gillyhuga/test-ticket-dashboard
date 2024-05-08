import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './lib/context/AuthContext.jsx';
import './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>,
);
