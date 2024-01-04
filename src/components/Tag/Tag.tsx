import React from 'react';
import style from './Tag.module.css';

interface ITag {
  percent: number;
}

const Tag: React.FC<ITag> = ({ percent }) => {
  return (
    <div
      className={style.wrapper}
      style={{
        backgroundColor: percent > 0 ? '#CBF4C9' : '#F8E5BA',
        color: percent > 0 ? '#0E6245' : '#9C3F0F',
      }}>
      {`${percent} %`}
    </div>
  );
};

export default Tag;
