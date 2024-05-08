import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const DetailTicketPage = () => {
    
    const storedData = localStorage.getItem('tickets');
    const [data, setData] = useState(JSON.parse(storedData|| []));
    const { id } = useParams();
    const ticket = data.find((item) => item?.id === parseInt(id));
    const dateArray = moment(ticket.createdAt).toArray();
    const { t } = useTranslation();

    const handleStatusChange = (ticketId, newStatus) => {
        const newData = data.map((item) => {
            if (item.id === parseInt(ticketId)) {
                return {
                    ...item,
                    status: newStatus,
                    updatedAt: new Date().toISOString()
                };
            }
            return item;
        });
        setData(newData);
        localStorage.setItem('tickets', JSON.stringify(newData)); 
        toast.success('Successfully changed ticket status!');
    };
    
    return (
        <div className="p-6">
            <p className='text-3xl font-semibold'>{t('detailTicket.title')}</p>
            <div className="card bg-base-100 shadow-md my-6">
                <div className="card-body">
                    {ticket ? (
                        <>
                            <div>
                                <h2 className="text-lg leading-6 font-medium ">{ticket.title}</h2>
                                <p className="mt-1 max-w-2xl text-sm ">{moment(dateArray).fromNow()}</p>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    <div className="sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                        <dt className="text-sm font-medium ">Customer Name</dt>
                                        <dd className="mt-1 text-sm sm:col-span-2">{ticket.name}</dd>
                                    </div>
                                    <div className="sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                        <dt className="text-sm font-medium ">Priority</dt>
                                        <dd className="mt-1 text-sm  sm:col-span-2">
                                            <div className={`badge  font-medium ${ticket.priority === 2 ? 'badge-error' : ticket.priority === 1 ? 'badge-warning' : 'badge-success'}`}>
                                                {ticket.priority === 2 ? 'HIGH' : ticket.priority === 1 ? 'MEDIUM' : 'LOW'}
                                            </div>
                                        </dd>
                                    </div>
                                    <div className="sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                        <dt className="text-sm font-medium ">Status</dt>
                                        <dd className="mt-1 text-sm  sm:col-span-2">{ticket.status === 1 ? 'Resolved' : ticket.status === 2 ? 'Unresolved' : 'Open'}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button className="btn text-white bg-green-500" onClick={() => handleStatusChange(parseInt(id), 1)}>Resolved</button>
                                <button className="btn text-white  bg-red-500" onClick={() => handleStatusChange(parseInt(id), 2)}>Unresolved</button>
                            </div>
                        </>
                    ) : (
                        <p>Ticket not found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailTicketPage;