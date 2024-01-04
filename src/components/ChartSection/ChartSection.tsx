import style from './ChartSection.module.css';
import BalanceItem from '../BalanceItem/BalanceItem';
import Dropdown from '../Dropdown/Dropdown';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

const ChartSection = () => {
  const balanceItemsData = [
    { title: 'EUR Balance', value: 3582.32, info: 'Estimated future payouts' },
    { title: 'EUR Balance', value: 4130.99, info: 'Deposited on 8 Jun' },
  ];
  const dropdownItemsData = [
    { title: 'Gross volume', value: 1452.25 },
    { title: 'Yesterday', value: 1253.61 },
  ];
  const chartData = [
    {
      name: '00:00',
      value: 4000,
    },
    {
      name: '01:00',
      value: 3000,
    },
    {
      name: '02:00',
      value: 2000,
    },
    {
      name: '03:00',
      value: 2780,
    },
    {
      name: '04:00',
      value: 1890,
    },
    {
      name: '05:00',
      value: 2390,
    },
    {
      name: '06:00',
      value: 3490,
    },
    {
      name: '07:00',
      value: 3490,
    },
    {
      name: '08:00',
      value: 3490,
    },
    {
      name: '09:00',
      value: 3490,
    },
    {
      name: '10:00',
      value: 3490,
    },
    {
      name: '11:00',
      value: 3490,
    },
    {
      name: '12:00',
      value: 3490,
    },
    {
      name: '13:00',
    },
    {
      name: '14:00',
    },
    {
      name: '15:00',
    },
    {
      name: '16:00',
    },
    {
      name: '17:00',
    },
    {
      name: '18:00',
    },
    {
      name: '19:00',
    },
    {
      name: '20:00',
    },
    {
      name: '21:00',
    },
    {
      name: '22:00',
    },
    {
      name: '23:00',
    },
    {
      name: '00:00',
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.balancesWrapper}>
        {balanceItemsData.map((item, idx) => (
          <BalanceItem {...item} isLast={idx === balanceItemsData.length - 1} />
        ))}
      </div>
      <div className={style.chartWrapper}>
        <div className={style.dropdownsWrapper}>
          {dropdownItemsData.map(item => (
            <Dropdown {...item} />
          ))}
        </div>
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
              <CartesianGrid stroke="#eee" horizontal={false} />
              <Line type="monotone" dataKey="value" stroke="#5469D4" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
