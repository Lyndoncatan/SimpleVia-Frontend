
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
    title: string;
    dataValues: number[];
    labels: string[];
    colors: string[];
    cutout?: string;
}

const DonutChart = ({ title, dataValues, labels, colors, cutout = '70%' }: DonutChartProps) => {
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: colors,
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        cutout: cutout,
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative h-32 w-32">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-xl font-bold text-gray-700">{dataValues[0]}%</span>
                </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">{title}</p>
        </div>
    );
};

export const StatisticsSection = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <DonutChart
                title="Attendance"
                dataValues={[85, 15]}
                labels={['Present', 'Absent']}
                colors={['#008000', '#eee']}
            />
            <DonutChart
                title="Male/Female"
                dataValues={[60, 40]}
                labels={['Male', 'Female']}
                colors={['#2196F3', '#FF4081']}
            />
            <DonutChart
                title="Organic"
                dataValues={[75, 25]}
                labels={['Organic', 'Others']}
                colors={['#FF9800', '#eee']}
            />
            <DonutChart
                title="Non-Organic"
                dataValues={[45, 55]}
                labels={['Non-Organic', 'Others']}
                colors={['#9C27B0', '#eee']}
            />
        </div>
    );
};

export default StatisticsSection;
