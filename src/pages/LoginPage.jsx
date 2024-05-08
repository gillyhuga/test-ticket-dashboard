import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../lib/context/AuthContext';
import LoginForm from '../components/LoginForm';
import LoginHeader from '../components/LoginHeader';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { data } from '../utils/static-data';


const LoginPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { user, signIn } = useAuth();
    

    useEffect(() => {
        if (user) {
            if (user.role === 'admin') {
                navigate('/overview');
            } else {
                navigate('/ticket/create');
            }
        }
    }, [user, navigate]);

    const handleLogin = async (formData) => {
        const foundUser = data.users.find(user => user.email === formData.email && user.password === formData.password);
    
        if (foundUser) {
            signIn({ email: foundUser.email, role: foundUser.role, name: foundUser.name });
            toast.success(t('toast.loginSuccesed'));
        } else {
            toast.error(t('toast.invalidCredentials'));
        }
    };

    return (
        <div data-theme="light" className={'flex items-center justify-center min-h-screen '}>
            <div className="bg-base-100 p-4 rounded-xl shadow-2xl max-w-sm w-full">
                <LoginHeader title={t('title')} />
                <LoginForm
                    onLogin={handleLogin}
                />
                <LanguageSwitcher/>
            </div>
        </div>
    );
};

export default LoginPage;
