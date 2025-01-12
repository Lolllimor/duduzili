import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  Label,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Checkbox } from '../ui/checkbox';
import { useFetchDashboardUserQuery } from '@/redux/features/dashboardApi';

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: { allUsers: number; female: number; male: number; month: string };
  }[];
}

export const UserGraph = () => {
  const [isActiveMale, setIsActiveMale] = useState(true);
  const [isActiveFemale, setIsActiveFemale] = useState(true);
  const [isActiveAllUser, setIsActiveAllUser] = useState(true);
  const { data } = useFetchDashboardUserQuery();

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white h-fit px-5 py-2 text-white rounded-lg flex flex-col justify-center gap-0.5 shadow-sm">
          <div className="flex items-center gap-2 text-[#E59055] text-base font-semibold">
            Male:
            <p className="text-[#4E5D78] text-base font-semibold">{`${payload[0].payload.male}`}</p>
          </div>

          <div className="flex items-center gap-2 text-[#367EE8] text-base font-semibold">
            Female:
            <p className="text-[#4E5D78] text-base font-semibold">{`${payload[0].payload.female}`}</p>
          </div>
          <div className="flex items-center gap-2 text-[#4534B8] text-base font-semibold">
            All Users:
            <p className="text-[#4E5D78] text-base font-semibold">{`${payload[0].payload.allUsers}`}</p>
          </div>
        </div>
      );
    }

    return null;
  };

  const CustomizedCursor = (props: any) => {
    const { height, points } = props;

    const { x } = points[0];

    return (
      <rect
        x={x - 35}
        y={-10}
        width={70}
        height={height}
        fill="url(#gradientCursor)"
        rx={15}
        ry={15}
      />
    );
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
        month: month.slice(0, 3),
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
            <Checkbox
              className="data-[state=checked]:bg-[#4534B8]"
              checked={isActiveAllUser}
              onCheckedChange={() => setIsActiveAllUser(!isActiveAllUser)}
            />

            <p className="font-normal font-sora text-sm text-[#4534B8]">
              All users
            </p>
          </div>
          <div className="relative flex items-center gap-[6px]">
            <Checkbox
              className="data-[state=checked]:bg-[#E59055]"
              checked={isActiveMale}
              onCheckedChange={() => setIsActiveMale(!isActiveMale)}
            />

            <p className="font-normal font-sora text-sm text-[#E59055]">Male</p>
          </div>
          <div className="relative flex items-center gap-[6px]">
            <Checkbox
              className="data-[state=checked]:bg-[#367EE8]"
              checked={isActiveFemale}
              onCheckedChange={() => setIsActiveFemale(!isActiveFemale)}
            />

            <p className="font-normal font-sora text-sm text-[#367EE8]">
              Female
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[16px] bg-white h-[461px] min-h-[397px] p-6 w-full shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={1024}
            height={397}
            data={tableData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="gradientCursor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(235, 242, 255, 0)" />
                <stop offset="100%" stopColor="#EBF2FF" />
              </linearGradient>
            </defs>

            <XAxis dataKey="month" axisLine={false} tickLine={false} dy={18} />
            <YAxis axisLine={false} tickLine={false} dx={-36} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={<CustomizedCursor />}
            />
            {isActiveFemale && (
              <Line
                activeDot={{
                  r: 10,
                  fill: '#367EE8',
                  stroke: '#fff',
                  strokeWidth: 5,
                  filter: 'drop-shadow(0px 4px 4px rgba(176, 183, 195, 0.17))',
                }}
                dot={false}
                type="monotone"
                dataKey="female"
                stroke="#367EE8"
                strokeWidth={2.5}
              />
            )}

            {isActiveMale && (
              <Line
                activeDot={{
                  r: 10,
                  fill: '#E59055',
                  stroke: '#fff',
                  strokeWidth: 5,
                  filter: 'drop-shadow(0px 4px 4px rgba(176, 183, 195, 0.17))',
                }}
                dot={false}
                type="monotone"
                dataKey="male"
                stroke="#E59055"
                strokeWidth={2.5}
              />
            )}

            {isActiveAllUser && (
              <Line
                activeDot={{
                  r: 10,
                  fill: '#4534B8',
                  stroke: '#fff',
                  strokeWidth: 5,
                  filter: 'drop-shadow(0px 4px 4px rgba(176, 183, 195, 0.17))',
                }}
                dot={false}
                type="monotone"
                dataKey="allUsers"
                stroke="#4534B8"
                strokeWidth={2.5}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
