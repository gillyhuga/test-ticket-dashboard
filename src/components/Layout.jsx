import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../lib/context/AuthContext';
import { useTheme } from '../lib/context/ThemeContext';

const Layout = () => {
    const { user } = useAuth();
    const { theme } = useTheme();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-base-200 text-black'}`}>
            <Navbar />
            <Sidebar>
                <Outlet />
            </Sidebar>
        </div>
    );
};

export default Layout;
