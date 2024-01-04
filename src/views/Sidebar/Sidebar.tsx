import React from 'react';
import style from './Sidebar.module.css';
import Icon from '../../components/Icon/Icon';

const Sidebar: React.FC = () => {
  return (
    <div className={style.sidebarWrapper}>
      <div className={style.headerWrapper}>
        <div className={style.storeIcon}>
          <Icon icon="store" />
        </div>
        <h1 className={style.header}>Store name</h1> <Icon icon="chevron" />
      </div>
      <div className={`${style.menuItemHome}`}>
        <Icon icon="home" />
        <p>Home</p>
      </div>
      <div className={style.menuItemsWrapper}>
        <div className={style.menuItem}>
          <Icon icon="payments" />
          <p>Payments</p>
        </div>
        <div className={style.menuItem}>
          <Icon icon="balances" />
          <p>Balances</p>
        </div>
        <div className={style.menuItem}>
          <Icon icon="customers" />
          <p>Customers</p>
        </div>
        <div className={style.menuItem}>
          <Icon icon="connected-accounts" />
          <p>Connected accounts</p>
        </div>
        <div className={style.menuItem}>
          <Icon icon="products" />
          <p>Products</p>
        </div>
        <div className={style.menuItem}>
          <Icon icon="reports" />
          <p>Reports</p>
        </div>
      </div>

      <div className={style.menuItemsWrapper}>
        <div className={style.menuItem}>
          <Icon icon="payments" />
          <p>Developers</p>
        </div>
        <div className={style.menuItem}>
          <Icon icon="home" />
          <p>View test data</p>
        </div>
        <div className={style.menuItem}>
          <Icon icon="settings" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
