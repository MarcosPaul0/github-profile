import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/loginRegister.module.scss';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import logoImg from '../assets/logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Github Profile | Login</title>
      </Head>

      <main className={styles.container}>
        <form className={styles.form}>
          <Image src={logoImg} alt="Logo"/>

          <Input name="email" label="E-mail" type="email" />

          <Input name="password" label="Senha" type="password" />

          <Link href="/register">Resgistre-se</Link>
          <Button text="Enviar" type="submit" />
        </form>
      </main>
    </>
  )
}
