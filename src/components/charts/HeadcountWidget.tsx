
import { Users, UserCheck } from 'lucide-react';

interface HeadcountWidgetProps {
    title: string;
    count: number;
    subtitle?: string;
    icon?: 'users' | 'check';
    color?: string;
}

const HeadcountWidget = ({ title, count, subtitle, icon = 'users', color = 'text-[var(--color-primary)]' }: HeadcountWidgetProps) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
                    <p className={`text-4xl font-bold mt-2 ${color}`}>{count.toLocaleString()}</p>
                </div>
                <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
                    {icon === 'users' ? (
                        <Users className={`h-6 w-6 ${color}`} />
                    ) : (
                        <UserCheck className={`h-6 w-6 ${color}`} />
                    )}
                </div>
            </div>
            {subtitle && (
                <div className="mt-4 text-sm text-gray-500">
                    {subtitle}
                </div>
            )}
        </div>
    );
};

export default HeadcountWidget;
