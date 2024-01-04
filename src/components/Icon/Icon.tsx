import React from 'react';
import style from './Icon.module.css';

interface IIcon {
  icon:
    | 'account'
    | 'add'
    | 'balances'
    | 'calendar'
    | 'check-thin'
    | 'check'
    | 'chevron'
    | 'connected-accounts'
    | 'customers'
    | 'developers'
    | 'export'
    | 'eye'
    | 'filter'
    | 'help-1'
    | 'help'
    | 'home'
    | 'lock'
    | 'more'
    | 'notifications'
    | 'payments'
    | 'products'
    | 'reports'
    | 'search'
    | 'select'
    | 'settings'
    | 'store';
  width?: number;
  height?: number;
}

const Icon: React.FC<IIcon> = ({ icon, width = 16, height = 16 }) => {
  return (
    <img
      src={`icons/${icon}.svg`}
      className={style.icon}
      width={width}
      height={height}
    />
  );
};

export default Icon;
