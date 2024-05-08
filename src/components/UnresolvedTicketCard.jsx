import PropTypes from 'prop-types';
import Divider from './Divider';
import { useTranslation } from 'react-i18next';

const UnresolvedTicketCard = ({ title, group, data }) => {
    const { t } = useTranslation();
    return (
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p className="text-sm mb-4 text-gray-500">Group: {group}</p>
                    </div>
                    <a className="link link-hover text-primary font-medium text-center">View details</a>
                </div>

                <div className="space-y-2 flex-row justify-between">
                    <div className="flex justify-between">
                        <span>{t('overview.unresolvedTicket.featureRequest')}</span>
                        <span className='text-gray-500'>{data.totalFeatureRequest}</span>
                    </div>
                    <Divider/>
                    <div className="flex justify-between">
                        <span>{t('overview.unresolvedTicket.awaitingCustomerResponse')}</span>
                        <span className='text-gray-500'>{data.awaitingCustomerResponse}</span>
                    </div>
                    <Divider/>
                    <div className="flex justify-between">
                        <span>{t('overview.unresolvedTicket.awaitingDeveloperFix')}</span>
                        <span className='text-gray-500'>{data.awaitingDeveloperFix}</span>
                    </div>
                    <Divider/>
                    <div className="flex justify-between">
                        <span>{t('overview.unresolvedTicket.pending')}</span>
                        <span className='text-gray-500'>{data.pending}</span>
                    </div>
                    <Divider/>
                </div>
            </div>
        </div>
    );
};

UnresolvedTicketCard.propTypes = {
    title: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
};

export default UnresolvedTicketCard;
