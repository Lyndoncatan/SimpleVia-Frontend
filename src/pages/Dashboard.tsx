
import { useState } from 'react';
import { ManpowerChart } from '../components/charts/ManpowerChart';
import { TurnoverChart } from '../components/charts/TurnoverChart';
import HeadcountWidget from '../components/charts/HeadcountWidget';
import StatisticsSection from '../components/charts/DonutCharts';
import AnalyticsBar from '../components/charts/AnalyticsBar';

const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

    const openModal = (title: string, content: JSX.Element) => {
        setModalTitle(title);
        setModalContent(content);
        setModalOpen(true);
    };

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
                <HeadcountWidget
                    title="Total Manpower"
                    count={12500}
                    icon="users"
                    color="text-green-600"
                    onView={() => openModal('Total Manpower', <ManpowerChart />)}
                />
                <HeadcountWidget
                    title="Total Vacant"
                    count={320}
                    icon="check"
                    color="text-orange-500"
                    onView={() => openModal('Total Vacant', <AnalyticsBar title="Vacant per Region" labels={["BARMM","CAR","NCR","R1","R2","R3","R4A","R4B"]} data={[12,8,50,40,30,20,10,5]} color="#F97316" />)}
                />
                <HeadcountWidget
                    title="New Hires"
                    count={45}
                    icon="users"
                    color="text-blue-500"
                    onView={() => openModal('New Hires', <AnalyticsBar title="New Hires (Monthly)" labels={["Jan","Feb","Mar","Apr","May","Jun"]} data={[5,8,10,7,9,6]} color="#0EA5E9" />)}
                />
                <HeadcountWidget
                    title="Separations"
                    count={12}
                    icon="users"
                    color="text-red-500"
                    onView={() => openModal('Separations', <AnalyticsBar title="Separations (Monthly)" labels={["Jan","Feb","Mar","Apr","May","Jun"]} data={[1,2,3,2,1,3]} color="#EF4444" />)}
                />
            </div>

            {/* Middle Row: Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Manpower Chart - Takes up 2 columns */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 lg:h-96">
                    <ManpowerChart />
                </div>

                {/* Turnover Chart - Takes up 1 column */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 lg:h-96">
                    <TurnoverChart />
                </div>
            </div>

            {/* Bottom Row: Donut Charts / Statistics */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Demographics & Attendance</h3>
                <StatisticsSection />
            </div>
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setModalOpen(false)} />
                    <div className="relative w-[95%] max-w-3xl bg-white rounded-xl p-6 shadow-lg z-10 h-[70vh]">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-800">{modalTitle}</h4>
                            <button className="text-gray-500 hover:text-gray-700" onClick={() => setModalOpen(false)}>Close</button>
                        </div>
                        <div className="h-full">{modalContent}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
