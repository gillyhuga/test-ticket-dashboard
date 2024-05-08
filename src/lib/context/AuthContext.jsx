import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const storedUserData = JSON.parse(localStorage.getItem('userData'));
                if (storedUserData) {
                    setUser(storedUserData);
                }
            } catch (error) {
                toast.error('Error checking authentication:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const signIn = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('userData');
        setUser(null);
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    const getUserRole = () => {
        return user?.role;
    };

    return (
        <AuthContext.Provider value={{ user, signIn, logout, isAuthenticated,getUserRole, loading }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
