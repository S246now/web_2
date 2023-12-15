import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });

      // Redirige a la página de inicio después del logout
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
