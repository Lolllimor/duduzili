import React from 'react';
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Checkbox } from '../ui/checkbox';
import { useFetchDashboardUserQuery } from '@/redux/features/dashboardApi';

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
}

export const UserGraph = () => {
  const { data } = useFetchDashboardUserQuery();
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-blue600 px-5 py-2 text-white rounded-lg flex flex-col justify-center items-center">
          <p>{`${payload[0].value}`}</p>
          <p>hours</p>
        </div>
      );
    }

    return null;
  };

  const tableData =
    data &&
    Object.entries(data?.data).map(([month, stats]) => {
      const typedStats = stats as {
        male: number;
        female: number;
        all_users: number;
      };
      return {
        month,
        male: typedStats.male,
        female: typedStats.female,
        allUsers: typedStats.all_users,
      };
    });


  return (
    <div className="border-[2px] flex flex-col gap-5 p-8 w-full h-[578px]  border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
      <div className="flex items-center justify-between">
        <h3 className="font-sora font-semibold text-base text-[#23222C]">
          Users
        </h3>
        <div className="flex itwms-center gap-[17px]">
          <div className="relative flex items-center gap-[6px]">
            <Checkbox className="data-[state=checked]:bg-[#4534B8]" />

            <p className="font-normal font-sora text-sm text-[#4534B8]">
              All users
            </p>
          </div>
          <div className="relative flex items-center gap-[6px]">
            <Checkbox className="data-[state=checked]:bg-[#E59055]" />

            <p className="font-normal font-sora text-sm text-[#E59055]">Male</p>
          </div>
          <div className="relative flex items-center gap-[6px]">
            <Checkbox className="data-[state=checked]:bg-[#367EE8]" />

            <p className="font-normal font-sora text-sm text-[#367EE8]">
              Female
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[16px] bg-white h-[461px] min-h-[320px] p-6 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={tableData}
            margin={{
              top: 36,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis domain={[0, 5]} axisLine={false} tickLine={false} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#3851DD', strokeWidth: 1 }}
              contentStyle={{
                backgroundColor: '#3851DD',
                color: 'white',
                width: 75,
                height: 56,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />

            <Line
              dot={false}
              type="monotone"
              dataKey="female"
              stroke="#367EE8"
              strokeWidth={2.5}
            />
            <Line
              dot={false}
              type="monotone"
              dataKey="male"
              stroke="#E59055"
              strokeWidth={2.5}
            />
            <Line
              dot={false}
              type="monotone"
              dataKey="allUsers"
              stroke="#4534B8"
              strokeWidth={2.5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
