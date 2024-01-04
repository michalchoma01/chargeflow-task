import style from './Searchbar.module.css';
import Icon from '../Icon/Icon';

const Searchbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inputWrapper}>
        <Icon icon="search" />
        <input type="text" className={style.input} placeholder="Search..." />
      </div>
      <div className={style.iconsWrapper}>
        <Icon icon="notifications" />
        <Icon icon="help" />
        <Icon icon="account" />
      </div>
    </div>
  );
};

export default Searchbar;
