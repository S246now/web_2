import { useRouter } from 'next/router';
import { useEffect } from 'react';

function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Lógica de logout: podrías borrar cookies, limpiar el estado de autenticación, etc.
    // Aquí, estamos simulando un logout y redireccionando a la página de inicio.
    const handleLogout = async () => {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
        });

        // Redirige a la página de inicio después del logout
        router.push('/');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    // Llama a la función de logout al cargar la página
    handleLogout();
  }, [router]);

  return <div>Logging out...</div>;
}

export default LogoutPage;
