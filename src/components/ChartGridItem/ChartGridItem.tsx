import React from 'react';
import style from './ChartGridItem.module.css';
import BalanceItem from '../BalanceItem/BalanceItem';
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';
import useIsMobile from '../../hooks/useIsMobile';

interface IChartGridItem {
  title: string;
  value: number;
  percent: number;
  prevVal: number;
}

const ChartGridItem: React.FC<IChartGridItem> = ({
  title,
  value,
  percent,
  prevVal,
}) => {
  const isMobile = useIsMobile();
  const chartData = [
    {
      name: 'Aug 2020',
      value1: 4000,
      value2: 1000,
    },
    {
      value1: 3000,
      value2: 3000,
    },
    {
      value1: 2000,
      value2: 2000,
    },
    {
      value1: 2780,
      value2: 4000,
    },
    {
      name: 'Jul 2021',
      value: 1890,
    },
  ];
  return (
    <div
      className={style.gridItemWrapper}
      style={{
        flexBasis: isMobile ? '100%' : '33.3333%',
        padding: isMobile ? '' : '0 25px',
      }}>
      <BalanceItem
        title={title}
        value={value}
        percent={percent}
        prevVal={prevVal}
      />
      <div className={style.chart}>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            data={chartData}
            margin={{
              right: 10,
              left: 10,
              top: 16,
              bottom: 0,
            }}>
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="value1" stroke="#5469D4" />
            <Line type="monotone" dataKey="value2" stroke="#A3ACB9" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartGridItem;
