import { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import toast from 'react-hot-toast';
import {ticketData} from '../utils/static-data';
import TicketTable from '../components/TicketTable';
import { useTranslation } from 'react-i18next';

const TicketPage = () => {
    const [data, setData] = useState([]);
    const [selectedPriority, setSelectedPriority] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); 
    const [sortBy, setSortBy] = useState(null);
    const [sortDesc, setSortDesc] = useState(false);
    const { t } = useTranslation();
    

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('tickets'));
        if (storedData) {
            setData(storedData);
        } else {
            setData(ticketData);
        }
    }, []);
    

    const handlePriorityFilter = (priority) => {
        setSelectedPriority(priority);
        setCurrentPage(1);
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('tickets'));
        if (storedData) {
            const filteredData = storedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setData(filteredData);
        } else {
            localStorage.setItem('tickets', JSON.stringify(ticketData));
            setData(ticketData);
        }
    }, []);

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortDesc(!sortDesc);
        } else {
            setSortBy(field);
            setSortDesc(false);
        }
    };

    const sortedData = sortBy ? [...data].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortDesc ? 1 : -1;
        if (a[sortBy] > b[sortBy]) return sortDesc ? -1 : 1;
        return 0;
    }) : data;

    const filteredData = selectedPriority !== null ? sortedData.filter(item => item.priority === selectedPriority) : sortedData;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleStatusChange = (index, newStatus) => {
        const newData = data.map((item, idx) => {
            if (idx === index) {
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
        toast.success('Succesfully change tickets status!');
    };
    

    return (
        <div className="p-6">
            <p className='text-3xl font-semibold'>{t('ticket.title')}</p>
            <div className="card bg-base-100 shadow-md my-6 ">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{t('ticket.cardTitle')}</h2>
                        <a href="/ticket/create" className="btn btn-primary">{t('ticket.createTitle')}</a>
                    </div>
                    <div className="dropdown dropdown-end flex justify-end">
                        <div tabIndex={0} role="button" className="btn btn-sm m-1"><FaFilter/></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handlePriorityFilter(null)}><a>All</a></li>
                            <li onClick={() => handlePriorityFilter(0)}><a>Low</a></li>
                            <li onClick={() => handlePriorityFilter(1)}><a>Medium</a></li>
                            <li onClick={() => handlePriorityFilter(2)}><a>High</a></li>
                        </ul>
                    </div>
                    <TicketTable
                        handleStatusChange={handleStatusChange}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        handleSort={handleSort}
                        sortedData={sortedData}
                    />
                    <div className="join justify-end">
                        <div className="flex gap-4 items-center">
                            <span>{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length}</span>
                            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="btn btn-sm">
                                &lt;
                            </button>
                            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)} className="btn btn-sm">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketPage;
