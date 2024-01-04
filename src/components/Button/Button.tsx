import React from 'react';
import styles from './Button.module.css';

interface IButton {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<IButton> = ({ suffix, prefix, children, style }) => {
  return (
    <button className={styles.buttonWrapper} style={style}>
      {prefix && <span className={styles.buttonContent}>{prefix}</span>}
      {children && <span className={styles.buttonContent}>{children}</span>}
      {suffix && <span className={styles.buttonContent}>{suffix}</span>}
    </button>
  );
};

export default Button;
