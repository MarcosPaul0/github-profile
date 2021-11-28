import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/searchProfile.module.scss';

import searchImg from '../assets/search.svg';

import { Header } from '../components/Header';
import { GithubProfile } from '../components/GithubProfile';

export default function SearchProfile() {
  return (
    <>
      <Head>
        <title>Github Profile | Buscar Perfil</title>
      </Head>

      <main>
        <Header user="Marcos Paulo" />
        <div className={styles.container}>
        <form className={styles.searchContainer}>
          <input 
            type="text"
          /> 
          <button 
            type="submit"
          >
            <Image
              src={searchImg} 
              alt="Search"
              height={50}
              width={50}
            />
          </button>     
        </form>
          <GithubProfile />
        </div>
      </main>
    </>
  )
}