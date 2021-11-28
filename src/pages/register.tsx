import Head from 'next/head'
import Image from  'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../api';
import styles from '../styles/loginRegister.module.scss'

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import logoImg from '../assets/logo.svg';

export default function Register() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório').min(8, 'Requer no mínimo 8 caractéres'),
    confirmPassword: Yup.string().required('Campo obrigatório').equals([Yup.ref('password'), null], 'As senhas diferem')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async data => {
      try {
        const result = await api.post('/register', data);
        console.log(result.data);
      } catch(err) {
        console.log(err);
      }
    }
  });

  return (
    <>
      <Head>
        <title>Github Profile | Register</title>
      </Head>

      <main className={styles.container}>
        <form className={styles.form}>
          <Image src={logoImg} alt="Logo"/>

          <Input 
            label="Nome" 
            name="name" 
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors.name}
          />

          <Input 
            label="E-mail" 
            name="email" 
            type="email" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email}
          />

          <Input 
            label="Senha" 
            name="password" 
            type="password" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.errors.password}
          />

          <Input 
            label="Confirme senha" 
            name="confirmPassword" 
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={formik.errors.confirmPassword}
          />

          <Button 
            text="Registrar" 
            type="submit"
            onClick={async (e) => {
              e.preventDefault()
              await formik.submitForm()
            }}
          />
        </form>
      </main>
    </>
  )
}
