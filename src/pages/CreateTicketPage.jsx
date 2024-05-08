import TicketForm from '../components/TicketForm';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CreateTicketPage = () => {
    const navigate = useNavigate();

    const handleSubmitSuccess = () => {
        const userRole = JSON.parse(localStorage.getItem('userRole'));
        if (userRole === 'guest') {
            toast.success('Ticket created successfully!');
        } else {
            navigate('/ticket');
            toast.success('Ticket created successfully!');
        }
    };

    return (
        <div className="p-6">
            <p className='text-3xl font-semibold'>Create Ticket</p>
            <div className="card bg-base-100 shadow-md my-6">
                <div className="card-body">
                    <TicketForm onSubmitSuccess={handleSubmitSuccess} />
                </div>
            </div>
        </div>
    );
};

export default CreateTicketPage;
