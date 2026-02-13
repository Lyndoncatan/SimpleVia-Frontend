
import { ManpowerChart } from '../components/charts/ManpowerChart';
import { TurnoverChart } from '../components/charts/TurnoverChart';
import HeadcountWidget from '../components/charts/HeadcountWidget';
import StatisticsSection from '../components/charts/DonutCharts';

const Dashboard = () => {
    return (
        <div className="space-y-6 pb-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <div className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                </div>
            </div>

            {/* Top Row: Headcount Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <HeadcountWidget title="Total Manpower" count={12500} icon="users" color="text-green-600" />
                <HeadcountWidget title="Total Vacant" count={320} icon="check" color="text-orange-500" />
                <HeadcountWidget title="New Hires" count={45} icon="users" color="text-blue-500" />
                <HeadcountWidget title="Separations" count={12} icon="users" color="text-red-500" />
            </div>

            {/* Middle Row: Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Manpower Chart - Takes up 2 columns */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
                    <ManpowerChart />
                </div>

                {/* Turnover Chart - Takes up 1 column */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
                    <TurnoverChart />
                </div>
            </div>

            {/* Bottom Row: Donut Charts / Statistics */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Demographics & Attendance</h3>
                <StatisticsSection />
            </div>
        </div>
    );
};

export default Dashboard;
