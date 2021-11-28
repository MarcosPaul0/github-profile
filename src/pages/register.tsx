import Head from 'next/head'
import Image from  'next/image';
import styles from '../styles/loginRegister.module.scss'

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import logoImg from '../assets/logo.svg';

export default function Register() {
  return (
    <>
      <div>
        <Head>
          <title>Github Profile | Register</title>
        </Head>
      </div>

      <main className={styles.container}>
        <form className={styles.form}>
          <Image src={logoImg} alt="Logo"/>

          <Input label="E-mail" name="email" type="email" />

          <Input label="Senha" name="password" type="password" />

          <Input label="Confirme senha" name="confirmPassword" type="password" />

          <Button text="Registrar" type="submit" />
        </form>
      </main>
    </>
  )
}
