import React, { useState } from 'react';
import style from './Dropdown.module.css';
import Icon from '../Icon/Icon';
import { formatter } from '../../utils/formatterCurrent';

interface IDropdown {
  title: string;
  value: number;
  small?: boolean;
}

const Dropdown: React.FC<IDropdown> = ({ title, value }) => {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    setOpen(prev => !prev);
  };
  return (
    <div className={style.wrapper} onClick={onClickHandler}>
      <div className={style.textWrapper}>
        <div className={`${style.title}`}>{title}</div>
        <div className={`${style.icon} ${open ? style.rotate : ''}`}>
          <Icon icon="chevron" width={12} />
        </div>
      </div>
      <div className={`${style.value} ${open ? style.open : style.close}`}>
        {formatter.format(value)}
      </div>
    </div>
  );
};

export default Dropdown;
