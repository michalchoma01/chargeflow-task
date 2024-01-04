import React from 'react';
import style from './BalanceItem.module.css';
import { formatter } from '../../utils/formatterCurrent';
import Icon from '../Icon/Icon';
import Tag from '../Tag/Tag';

interface IBalanceItem {
  title: string;
  value: number;
  info?: string;
  isLast?: boolean;
  percent?: number;
  prevVal?: number;
}

const BalanceItem: React.FC<IBalanceItem> = ({
  title,
  value,
  percent,
  info,
  isLast,
  prevVal,
}) => {
  return (
    <div
      className={`${style.wrapper} ${isLast ? style.lastItem : ''}`}
      style={{ padding: percent ? '20px 0' : '20px 10px 20px 20px' }}>
      <div className={style.upper}>
        <div className={style.upperTexts}>
          <h3 className={style.title}>{title}</h3>
          {percent ? (
            <>
              <Icon icon="help-1" /> <Tag percent={percent} />
            </>
          ) : null}
        </div>
        <p className={style.view}>View</p>
      </div>
      <div className={style.valueWrapper}>
        <span className={style.value}>{formatter.format(value)}</span>
        {prevVal ? (
          <span className={style.perValue}>{formatter.format(prevVal)}</span>
        ) : null}
      </div>
      <p className={style.info}>{info}</p>
    </div>
  );
};

export default BalanceItem;
