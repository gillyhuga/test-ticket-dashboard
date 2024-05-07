import PropTypes from 'prop-types';
import useInput from '../lib/hooks/useInput';
import { useTranslation } from 'react-i18next';

const LoginForm = ({ onLogin }) => {
    const { t } = useTranslation();
    const validatePassword = (value) => {
        if (value.length < 8) {
            return t('pageLogin.passwordError');
        }
        return '';
    };
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange, passwordError] = useInput('', validatePassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordError) {
            return;
        }
        const formData = {
            email,
            password,
        };

        onLogin(formData);
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">{t('pageLogin.email')}</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder={t('pageLogin.email')}
                    className="input input-bordered"
                    required
                    value={email}
                    onChange={onEmailChange}
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">{t('pageLogin.password')}</span>
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder={t('pageLogin.password')}
                    className={`input input-bordered ${passwordError ? 'input-error' : ''}`}
                    required
                    value={password}
                    onChange={onPasswordChange}
                />
                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
            <div className="form-control">
                <button type="submit" className="btn btn-neutral w-full">
                    {t('pageLogin.login')}
                </button>
            </div>
        </form>
    );
};

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
