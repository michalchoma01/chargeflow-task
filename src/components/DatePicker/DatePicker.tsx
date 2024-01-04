import Button from '../Button/Button';
import style from './DatePicker.module.css';
import Icon from '../Icon/Icon';

const DatePicker = () => {
  return (
    <div className={style.wrapper}>
      <Button
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        suffix={<Icon icon="chevron" width={14} height={14} />}>
        Last 12 months
      </Button>
      <Button
        style={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        prefix={<Icon icon="calendar" width={14} height={14} />}>
        1 Aug 2020-7 July 2021
      </Button>
    </div>
  );
};

export default DatePicker;
