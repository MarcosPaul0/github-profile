import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { ReactText } from 'react';

interface NotifyReturn {
  errorNotify: ( message: string, path?: string ) => ReactText;
  successNotify: ( message: string, path?: string ) => ReactText;
}

export function useNotify(): NotifyReturn {
  const router = useRouter();

  const errorNotify = ( message: string, path?: string ) => toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClose: () => path ? router.push(path) : null,
    theme: 'colored'
  });

  const successNotify = ( message: string, path?: string ) => toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClose: () => path ? router.push(path) : null,
    theme: 'colored'
  });

  return {
    errorNotify,
    successNotify
  }
}