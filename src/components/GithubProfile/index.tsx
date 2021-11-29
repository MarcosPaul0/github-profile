import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

interface GithubProfileProps {
  login: string
  location: string | null,
  bio: string | null,
  public_repos: number,
  avatar_url: string,
  html_url: string
}

export function GithubProfile({
  login,
  location, 
  bio,
  public_repos,
  avatar_url,
  html_url
}: GithubProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image} 
          src={avatar_url}
          alt="User avatar" 
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.headerContainer}>
          <strong>{login}</strong>
          <span>{public_repos} repos</span>
        </div>
        <p><strong>De: </strong>{location}</p>
        <p><strong>Bio: </strong>{bio}</p>
        <Link href={html_url}>Acessar perfil</Link>
      </div>
    </div>
  );
}