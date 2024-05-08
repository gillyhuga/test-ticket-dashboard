import { useEffect, useState } from 'react';
import SplineChart from '../components/Chart';
import StatisticCard from '../components/StatisticCard';
import StatisticItem from '../components/StatisticItem';
import TaskCard from '../components/TaskCard';
import UnresolvedTicketCard from '../components/UnresolvedTicketCard';
import { getStatistic, getTasks, getTicketGraph } from '../lib/api/overview';
import moment from 'moment';

const OverviewPage = () => {
    const todayDateTime = moment().format('DD MMMM YYYY, hh:mm A');
    const [statisticOverview, setStatisticOverview] = useState(null);
    const [ticketGraphData, setTicketGraphData] = useState(null);
    const [taskData, setTaskData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const statisticData = await getStatistic();
                setStatisticOverview(statisticData);

                const graphData = await getTicketGraph();
                setTicketGraphData(graphData);

                const taskData = await getTasks();
                setTaskData(taskData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const unresolvedData = [
        { label: 'Waiting on Feature Request', value: 4238 },
        { label: 'Awaiting Customer Response', value: 1005 },
        { label: 'Awaiting Developer Fix', value: 914 },
        { label: 'Pending', value: 281 },
    ];

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='p-6'>
            <p className='text-3xl font-semibold'>Overview</p>
            <StatisticCard data={statisticOverview} />
            <div className="card lg:card-side shadow-md bg-base-100  flex flex-col justify-center items-center space-y-8 ">
                <div className="card-body flex-grow justify-between">
                    <div>
                        <h2 className="card-title mb-4">Today&apos;s Trends</h2>
                        <p className="text-sm text-gray-500">as of {todayDateTime}</p>
                    </div>
                    <SplineChart data={ticketGraphData} />
                </div>
                <StatisticItem data={statisticOverview} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                <UnresolvedTicketCard
                    title="Unresolved tickets"
                    group="Support"
                    data={unresolvedData} />
                <TaskCard
                    title="Tasks"
                    data={taskData} />
            </div>

        </div>
    );
};

export default OverviewPage;
