import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TicketForm = ({ onSubmitSuccess }) => {
    const [ticketData, setTicketData] = useState({
        id: 0,
        title: '',
        name: '',
        priority: 0,
        status: 0,
    });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setTicketData(prevData => ({
                ...prevData,
                name: userData.name
            }));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'priority' ? parseInt(value) : value;
        setTicketData(prevData => ({
            ...prevData,
            [name]: parsedValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const currentDate = new Date().toISOString();
        const updatedTicketData = {
            ...ticketData,
            id: Date.now(),
            createdAt: currentDate,
            updatedAt: currentDate,
        };
    
        const existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        localStorage.setItem('tickets', JSON.stringify([...existingTickets, updatedTicketData]));
    
        onSubmitSuccess();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" value={ticketData.title} onChange={handleInputChange} className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Priority</span>
                </label>
                <select name="priority" value={ticketData.priority} onChange={handleInputChange} className="select select-bordered">
                    <option value={0}>Low</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Save Ticket</button>
        </form>
    );
};

TicketForm.propTypes = {
    onSubmitSuccess: PropTypes.func.isRequired,
};

export default TicketForm;
