import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

export function GithubProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image} 
          src="https://github.com/MarcosPaul0.png" 
          alt="User avatar" 
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.headerContainer}>
          <strong>MarcosPaul0</strong>
          <span>33 repos</span>
        </div>
        <p><strong>De: </strong>Conceição dos Ouros - MG</p>
        <p><strong>Bio: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa ante, facilisis vel accumsan et, laoreet sed diam. Phasellus sodales, nisl in aliquet feugiat, ipsum mauris.</p>
        <Link href="#">Acessar perfil</Link>
      </div>
    </div>
  );
}