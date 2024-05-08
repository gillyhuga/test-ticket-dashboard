import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../lib/context/ThemeContext';
import { MdSpaceDashboard,MdAllInbox } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../lib/context/AuthContext';

const Sidebar = ({ children }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const { user } = useAuth();
    const sidebarItems = [
        { key: 'overview', path: '/overview', label: t('sidebar.overview'), icon: <MdSpaceDashboard />, roles: ['admin'] },
        { key: 'ticket', path: '/ticket', label: t('sidebar.ticket'), icon: <MdAllInbox />, roles: ['user', 'admin'] }
    ];

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {children && (
                <div className="drawer-content px-4">
                    {children}
                </div>
            )}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className={`menu p-4 w-60 min-h-full space-y-2 ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'}`} >
                    {sidebarItems.filter(item => item.roles.includes(user?.role)).map(item => (
                        <li key={item.path}>
                            <NavLink to={item.path} className="text-sm font-medium">
                                {item.icon && <span className="mr-1">{item.icon}</span>}
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    children: PropTypes.node,
};

export default Sidebar;
