import style from './ChartGrid.module.css';
import ChartGridItem from '../ChartGridItem/ChartGridItem';

const ChartGrid = () => {
  return (
    <div className={style.wrapper}>
      <ChartGridItem
        title="Gross volume"
        value={4130.99}
        percent={3.2}
        prevVal={1253.92}
      />
      <ChartGridItem
        title="Gross volume"
        value={4130.99}
        percent={3.2}
        prevVal={1253.92}
      />
      <ChartGridItem
        title="Gross volume"
        value={4130.99}
        percent={-3.2}
        prevVal={1253.92}
      />
      <ChartGridItem
        title="Gross volume"
        value={4130.99}
        percent={-3.2}
        prevVal={1253.92}
      />
      <ChartGridItem
        title="Gross volume"
        value={4130.99}
        percent={3.2}
        prevVal={1253.92}
      />
      <ChartGridItem
        title="Gross volume"
        value={4130.99}
        percent={3.2}
        prevVal={1253.92}
      />
    </div>
  );
};

export default ChartGrid;
