import PropTypes from 'prop-types';
import Divider from './Divider';
import moment from 'moment';
const StatisticItem = ({ data }) => {
    const durationRT = moment.duration(data.avgRT, 'seconds');
    const durationFRS = moment.duration(data.avgFRS, 'seconds');
    const hoursRT = durationRT.hours();
    const minutesRT = durationRT.minutes();
    const minutesFRS = durationFRS.minutes();
    
    return (
        <div className="flex flex-col items-center space-y-2  text-center">
            <div className="p-4">
                <h2 className="text-lg text-gray-500 font-semibold">Resolved</h2>
                <p className="text-4xl text-center font-medium">{data.totalResolved}</p>
            </div>
            <Divider/>
            <div className="p-4">
                <h2 className="text-lg text-gray-500 font-semibold">Received</h2>
                <p className="text-4xl text-center font-medium">{data.totalReceived}</p>
            </div>
            <Divider/>
            <div className="p-4">
                <h2 className="text-lg text-gray-500 font-semibold">Average first response time</h2>
                <p className="text-4xl text-center font-medium">{minutesFRS}m</p>
            </div>
            <Divider/>
            <div className="p-4">
                <h2 className="text-lg text-gray-500 font-semibold">Average response time</h2>
                <p className="text-4xl text-center font-medium">{hoursRT}h {minutesRT}m</p>
            </div>
            <Divider/>
            <div className="p-4">
                <h2 className="text-lg text-gray-500 font-semibold">Resolution with SLA</h2>
                <p className="text-4xl text-center font-medium">{data.totalResolution}%</p>
            </div>
            <Divider/>
        </div>

    );
};


StatisticItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default StatisticItem;
