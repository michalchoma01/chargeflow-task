import React from 'react';
import style from './HeaderSection.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import DatePicker from '../DatePicker/DatePicker';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

interface IHeaderSection {
  title: string;
  withFilters?: boolean;
}

const HeaderSection: React.FC<IHeaderSection> = ({ title, withFilters }) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={style.wrapper}
      style={{
        paddingBottom: withFilters ? '16px' : '32px',
        borderBottom: withFilters && isMobile ? 'none' : '1px solid #E3E8EE',
        margin: withFilters && isMobile ? '0 15px' : '0 40px',
      }}>
      <h1>{title}</h1>
      {withFilters && (
        <div className={style.filtersSection}>
          <div className={style.leftSection}>
            <DatePicker />
            {isMobile ? null : (
              <>
                <p>compared to</p>
                <Button suffix={<Icon icon="chevron" width={14} height={14} />}>
                  Previous period
                </Button>
              </>
            )}
          </div>
          {isMobile ? null : (
            <div className={style.rightSection}>
              <Button suffix={<Icon icon="select" width={14} height={14} />}>
                Monthly
              </Button>
              <Button suffix={<Icon icon="settings" width={14} height={14} />}>
                Edit charts
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
