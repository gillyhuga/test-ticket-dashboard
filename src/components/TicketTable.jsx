import PropTypes from 'prop-types';
import { FaCheck, FaTimes } from 'react-icons/fa';
import moment from 'moment';

const TicketTable = ({ handleStatusChange, currentPage, itemsPerPage, handleSort, sortedData }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('title')}>Ticket Detail</th>
                        <th onClick={() => handleSort('name')}>Customer Name</th>
                        <th onClick={() => handleSort('createdAt')}>Date</th>
                        <th onClick={() => handleSort('priority')}>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <a href={`/ticket/${item.id}`} className="ticket-detail">
                                        <div>
                                            <div className="font-bold">{item.title}</div>
                                            <div className="text-sm opacity-50">{moment(moment(item.createdAt).toArray()).fromNow()}</div>
                                        </div>
                                    </a>
                                </div>
                            </td>

                            <td>
                                <div className="font-bold">{item.name}</div>
                            </td>
                            <td>
                                <div className="font-bold">{moment(item.createdAt).format('MMMM Do YYYY')}</div>
                                <div className="text-sm opacity-50">{moment(item.updatedAt).format('h:mm A')}</div>
                            </td>
                            <td>
                                <div className={`badge text-white font-medium ${item.priority === 2 ? 'badge-error' : item.priority === 1 ? 'badge-warning' : 'badge-success'}`}>
                                    {item.priority === 2 ? 'HIGH' : item.priority === 1 ? 'MEDIUM' : 'LOW'}
                                </div>
                            </td>
                            <td className="px-4 py-2">
                                <button className="btn mx-1 btn-sm btn-square bg-green-500 text-white" onClick={() => handleStatusChange(index, 1)}>
                                    <FaCheck />
                                </button>
                                <button className="btn mx-1 btn-sm btn-square btn-outline bg-red-500 text-white" onClick={() => handleStatusChange(index, 2)}>
                                    <FaTimes />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


TicketTable.propTypes = {
    handleStatusChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    handleSort: PropTypes.func.isRequired,
    sortedData: PropTypes.array.isRequired,
};

export default TicketTable;

