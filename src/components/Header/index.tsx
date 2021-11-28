import Image from 'next/image';
import logoImg from '../../assets/logo.svg'
import styles from './styles.module.scss';

interface HeaderProps {
  user: string;
}

export function Header({ user }: HeaderProps) {
  return(
    <header className={styles.container}>
      <Image src={logoImg} alt="Logo" />

      <div className={styles.user}>
        <h2>{ user }</h2>
        <span> | </span>
        <button>sair</button>
      </div>
    </header>
  );
}