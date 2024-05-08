import PropTypes from 'prop-types';

const StatisticCard = ({data}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center py-6">
            <div className="card w-full sm:w-full bg-base-100 shadow-sm text-center items-center hover:text-primary border-2 hover:border-primary">
                <div className="card-body">
                    <h2 className="card-title pb-4">Unresolved</h2>
                    <p className="text-5xl font-medium">{data.totalUnresolved}</p>
                </div>
            </div>
            <div className="card w-full sm:w-full bg-base-100 shadow-sm text-center items-center hover:text-primary border-2 hover:border-primary">
                <div className="card-body">
                    <h2 className="card-title pb-4">Overdue</h2>
                    <p className="text-5xl font-medium">{data.totalOverdue}</p>
                </div>
            </div>
            <div className="card w-full sm:w-full bg-base-100 shadow-sm text-center items-center hover:text-primary border-2 hover:border-primary">
                <div className="card-body">
                    <h2 className="card-title pb-4">Open</h2>
                    <p className="text-5xl font-medium">{data.totalOpen}</p>
                </div>
            </div>
            <div className="card w-full sm:w-full bg-base-100 shadow-sm text-center items-center hover:text-primary border-2 hover:border-primary">
                <div className="card-body">
                    <h2 className="card-title pb-4">On Hold</h2>
                    <p className="text-5xl font-medium">{data.totalOnHold}</p>
                </div>
            </div>
        </div>
    );
};

StatisticCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default StatisticCard;
