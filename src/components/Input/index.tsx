import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={styles.input}
        name={name} 
        id={name} 
        {...rest}
      />
    </div>
  );
}