import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import OverviewPage from './pages/OverviewPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Layout />}>
                <Route path="/overview" element={<OverviewPage />} />
            </Route>
        </Routes>
    );
}

export default App;
