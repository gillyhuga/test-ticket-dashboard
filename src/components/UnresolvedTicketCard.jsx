import React from 'react';
import PropTypes from 'prop-types';
import Divider from './Divider';

const UnresolvedTicketCard = ({ title, group, data }) => {
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
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="flex justify-between">
                                <span>{item.label}</span>
                                <span className='text-gray-500'>{item.value}</span>
                            </div>
                            {index !== data.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
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
