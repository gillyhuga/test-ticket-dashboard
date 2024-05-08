import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import OverviewPage from './pages/OverviewPage';
import TicketPage from './pages/TicketPage';
import DetailTicketPage from './pages/DetailTicketPage';
import CreateTicketPage from './pages/CreateTicketPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Layout />}>
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/ticket" element={<TicketPage />} />
                <Route path="/ticket/:id" element={<DetailTicketPage />} />
                <Route path="/ticket/create" element={<CreateTicketPage />} />
            </Route>
        </Routes>
    );
}

export default App;
