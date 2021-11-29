import { useContext, FormEvent, useState } from 'react';
import { AuthContext } from '../contexts/authContext';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/loginRegister.module.scss';
import logoImg from '../assets/logo.svg';
import { ToastContainer } from 'react-toastify';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    signIn(email, password);
  }

  return (
    <>
      <Head>
        <title>Github Profile | Login</title>
      </Head>

      <main className={styles.container}>
        <form className={styles.form}>
          <Image src={logoImg} alt="Logo"/>

          <Input 
            name="email" 
            label="E-mail" 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            name="password" 
            label="Senha" 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Link href="/register">Resgistre-se</Link>
          <Button 
            text="Enviar" 
            type="submit"
            onClick={handleSubmit}
          />
          <ToastContainer />
        </form>
      </main>
    </>
  )
}
