import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

const SplineChart = ({ data }) => {
    const seriesData = data.map(item => item.value);
    const xCategories = data.map(item => item.date);

    const options = {
        chart: {
            height: 550,
            type: 'area',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: xCategories
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        colors: ['#3750fe']
    };

    return (
        <div>
            <Chart options={options} series={[{ data: seriesData }]} type="area" height={500} />
        </div>
    );
};

SplineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired
    })).isRequired
};

export default SplineChart;
