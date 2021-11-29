import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string | undefined;
}

export function Input({ label, name, error, ...rest }: InputProps) {
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
      { error ? <p className={styles.message}>{error}</p> : null }
    </div>
  );
}