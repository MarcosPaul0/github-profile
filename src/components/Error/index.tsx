import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ErrorProps {
  children: ReactNode
}

export function Error({ children }: ErrorProps) {
  return (
    <p className={styles.message}>{children}</p>
  )
}