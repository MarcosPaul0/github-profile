import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext'

import Image from 'next/image';
import logoImg from '../../assets/logo.svg'
import styles from './styles.module.scss';

interface HeaderProps {
  user?: string;
}

export function Header({ user }: HeaderProps) {
  const { signOut } = useContext(AuthContext);

  return(
    <header className={styles.container}>
      <Image src={logoImg} alt="Logo" />

      <div className={styles.user}>
        <h2>{ user }</h2>
        <span> | </span>
        <button onClick={() => signOut()}>sair</button>
      </div>
    </header>
  );
}