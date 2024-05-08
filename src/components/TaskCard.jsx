import React from 'react';
import PropTypes from 'prop-types';
import Divider from './Divider';

const TaskCard = ({ title, data }) => {
    const getStatusBadge = (status) => {
        switch (status) {
        case 0:
            return <span className="badge badge-success ml-2 text-white">NEW</span>;
        case 1:
            return <span className="badge ml-2 badge-ghost text-gray-500">DEFAULT</span>;
        case 2:
            return <span className="badge badge-warning ml-2 text-white">URGENT</span>;
        default:
            return null;
        }
    };

    return (
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p className="text-sm mb-4 text-gray-500">Today</p>
                    </div>
                    <a className="link link-hover text-primary font-medium">View all</a>
                </div>

                <div className="space-y-2 flex-row justify-between">
                    {data.map((task, index) => (
                        <React.Fragment key={index}>
                            <div className="form-control">
                                <label className="label cursor-pointer flex justify-between items-center">
                                    <div className='flex items-center'>
                                        <input type="checkbox" className="checkbox checkbox-primary mr-2" defaultChecked={task.isDone}/>
                                        <span className="label-text">{task.title}</span>
                                    </div>
                                    {getStatusBadge(task.status)}
                                </label>
                            </div>
                            {index !== data.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            status: PropTypes.oneOf([0, 1, 2]).isRequired,
            isDone: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default TaskCard;
