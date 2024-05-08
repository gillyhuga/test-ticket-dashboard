import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../lib/context/AuthContext';

const Layout = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <div >
            <Navbar />
            <Sidebar>
                <Outlet />
            </Sidebar>
        </div>
    );
};

export default Layout;
