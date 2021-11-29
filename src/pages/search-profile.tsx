import api from '../api';
import { AuthContext } from '../contexts/authContext';
import { useContext, useState, FormEvent } from 'react';
import { useNotify } from '../hooks/useNotify';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/searchProfile.module.scss';
import searchImg from '../assets/search.svg';
import { ToastContainer } from 'react-toastify';

import { Header } from '../components/Header';
import { GithubProfile } from '../components/GithubProfile';

interface IGithubProfile {
  login: string
  email: string | null,
  location: string | null,
  bio: string | null,
  public_repos: number,
  avatar_url: string,
  html_url: string
}

export default function SearchProfile() {
  const { user } = useContext(AuthContext);
  const { errorNotify } = useNotify();

  const [profile, setProfile] = useState('');
  const [githubProfile, setGithubProfile] = useState<IGithubProfile | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const githubUser = await api.post<IGithubProfile>('/search', {
        profile
      });

      setGithubProfile(githubUser.data);
      console.log(githubProfile)
    } catch(err: any) {
      errorNotify(err.response.data.message);
    }
  }

  return (
    <>
      <Head>
        <title>Github Profile | Buscar Perfil</title>
      </Head>

      <main>
        <Header user={user?.name} />
        <div className={styles.container}>
          <form className={styles.searchContainer}>
            <input 
              type="text"
              placeholder="Nome ou email do Github"
              value={profile}
              onChange={e => setProfile(e.target.value)}
            /> 
            <button 
              type="submit"
              onClick={handleSubmit}
            >
              <Image
                src={searchImg} 
                alt="Search"
                height={50}
                width={50}
              />
            </button>
            <ToastContainer />
          </form>

          {githubProfile ? <GithubProfile 
            avatar_url={githubProfile.avatar_url}
            bio={githubProfile.bio}
            html_url={githubProfile.html_url}
            location={githubProfile.location}
            login={githubProfile.login}
            public_repos={githubProfile.public_repos}
          /> : null}
        </div>
      </main>
    </>
  )
}