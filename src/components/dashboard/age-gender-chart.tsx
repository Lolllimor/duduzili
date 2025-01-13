'use client';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import {
  useFetchAgeGroupQuery,
  useFetchGenderRatioQuery,
} from '@/redux/features/dashboardApi';
import { Skeleton } from '../ui/skeleton';

export const AgeGenderChart = () => {
  const { data, isLoading } = useFetchGenderRatioQuery();
  const { data: Agedata, isLoading: ageLoading } = useFetchAgeGroupQuery();

  const ageTotalSum = Object.values(Agedata?.data || {}).reduce(
    (acc: number, count) => acc + (count as number),
    0
  );
  const agePercentages = Object.entries(Agedata?.data || {}).map(
    ([key, value]) => ({
      key,
      value: ((value as number) / ageTotalSum) * 100, // Calculate percentage
    })
  );

  const totalSum = Object.values(data?.data || {}).reduce(
    (acc: number, count) => acc + (count as number),
    0
  );

  const percentages = Object.entries(data?.data || {}).map(([key, value]) => ({
    key,
    value: ((value as number) / totalSum) * 100, // Calculate percentage
  }));

  const chartColor = ['#DAD6F1', '#4534B8'];

  const AgechartColor = ['#DAD6F1', '#7D71CD', '#4534B8'];

  const Label = ({ data, color }: { data: any; color: any }) => {
    return (
      <div className="flex flex-col gap-4 w-full">
        {data?.map((entry: { key: string; value: number }, idx: number) => (
          <div key={idx} className=" flex items-center flex-1 justify-between">
            <div className="flex items-center gap-3">
              <div
                style={{ backgroundColor: color[idx] }}
                className={` h-4 w-4 rounded-full`}
              ></div>
              <p className="font-sora text-[10px] text-[#2A2A2A]">
                {entry.key.charAt(0).toUpperCase() + entry.key.slice(1)}
              </p>
            </div>
            <p className="font-sora text-[10px] text-[#2A2A2A]">
              {entry.value.toFixed()}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="border-[2px] p-8 w-full flex items-center justify-between gap-8 border-[#F5F5F5] bg-[#FCFCFD] rounded-[20px]">
      <div className="rounded-[16px] bg-white h-[266px] p-6 w-1/2 gap-4 flex flex-col items-start">
        <p className="font-sora font-semibold text-base text-[#23222C]">
          Gender ratio
        </p>
        {isLoading ? (
          <div className="flex gap-16 items-center  h-full w-full">
            <Skeleton className="w-[127px] h-[127px] rounded-full flex justify-center items-center">
              <div className=" w-[80px] h-[80px] rounded-full bg-white"></div>
            </Skeleton>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <Skeleton className="w-20 h-2 " />
              </div>
              <div className="flex gap-3 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <Skeleton className="w-20 h-2 " />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-16 h-full w-full">
            <PieChart
              width={150}
              height={150}
              className="mx-auto flex justify-between min-w-[150px]"
            >
              <Pie
                data={percentages || []}
                dataKey="value"
                nameKey="key"
                paddingAngle={10}
                cx="50%"
                cy="50%"
                cornerRadius={5}
                strokeWidth={0}
                innerRadius={40}
                outerRadius={65}
                fill="#8884d8"
              >
                {percentages
                  ? percentages.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={chartColor[idx]} />
                    ))
                  : null}
              </Pie>
            </PieChart>
            <Label data={percentages} color={chartColor} />
          </div>
        )}
      </div>
      <div className="rounded-[16px] bg-white h-[266px] p-6 w-1/2 gap-4 flex flex-col items-start">
        <p className="font-sora font-semibold text-base text-[#23222C]">
          Age Group
        </p>
        {ageLoading ? (
          <div className="flex gap-16 items-center  h-full w-full">
            <Skeleton className="w-[127px] h-[127px] rounded-full flex justify-center items-center">
              <div className=" w-[80px] h-[80px] rounded-full bg-white"></div>
            </Skeleton>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <Skeleton className="w-20 h-2 " />
              </div>
              <div className="flex gap-3 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <Skeleton className="w-20 h-2 " />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-16 h-full w-full">
            <PieChart
              width={150}
              height={150}
              className="mx-auto flex justify-between min-w-[150px]"
            >
              <Pie
                data={agePercentages || []}
                dataKey="value"
                nameKey="key"
                paddingAngle={10}
                cx="50%"
                cy="50%"
                cornerRadius={5}
                strokeWidth={0}
                innerRadius={40}
                outerRadius={65}
                fill="#8884d8"
              >
                {agePercentages
                  ? agePercentages.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={AgechartColor[idx]} />
                    ))
                  : null}
              </Pie>
            </PieChart>
            <Label data={agePercentages} color={AgechartColor} />
          </div>
        )}
      </div>
    </div>
  );
};
