import { Link, useNavigate } from 'react-router-dom';
import {
    MdOutlineBrightness2,
    MdOutlineWbSunny,
    MdOutlineExitToApp
} from 'react-icons/md';
import { useAuth } from '../lib/context/AuthContext';
import { useTheme } from '../lib/context/ThemeContext';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const { t } = useTranslation();

    const handleLogout = () => {
        logout();
        navigate('/');
        toast.success('Logout Success');
    };

    return (
        <div className={`navbar ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-black'}`}>
            <div className="navbar-start">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-ghost btn-circle btn-primary drawer-button lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </label>
                <Link to="/" className="btn btn-ghost text-xl">
                    {t('title')}
                </Link>
            </div>
            <div className="navbar-end">
                {/* <button className="btn btn-square hidden sm:flex">
                    <MdOutlinet size={25} />
                </button> */}
                <button className="btn btn-square mx-4 hidden sm:flex" onClick={toggleTheme}>
                    {theme === 'dark' ? (
                        <MdOutlineWbSunny size={25} />
                    ) : (
                        <MdOutlineBrightness2 size={25} />
                    )}
                </button>
                {user && (
                    <div className="dropdown dropdown-end">
                        <div
                            className="avatar placeholder"
                            tabIndex={0}
                            role="button"
                        >
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span>A</span>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`dropdown-content z-[1] menu p-2 shadow-xl rounded-box w-52 mt-4 ${theme === 'dark' ? 'bg-accent-content' : 'bg-white '}`}
                        >
                            {/* <li className="sm:hidden rounded-lg mb-1">
                                <a
                                    className="dropdown-link flex items-center"
                                    onClick={toggleLanguage}
                                >
                                    <MdOutlinet size={20} className="mr-2" />
                                    {t('navbar.t')}
                                </a>
                            </li> */}
                            <li className="sm:hidden rounded-lg mb-1">
                                <a
                                    className="dropdown-link flex items-center"
                                    onClick={toggleTheme}
                                >
                                    {theme === 'dark' ? (
                                        <MdOutlineWbSunny size={20} className="mr-2" />
                                    ) : (
                                        <MdOutlineBrightness2 size={20} className="mr-2" />
                                    )}
                                    {t('navbar.theme')}
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-link rounded-lg flex items-center"
                                    onClick={handleLogout}
                                >
                                    <MdOutlineExitToApp size={20} className="mr-2" />
                                    {t('navbar.logout')}
                                </a>
                            </li>
                        </ul>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
