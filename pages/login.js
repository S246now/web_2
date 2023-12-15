import { useState } from 'react';
import { useRouter } from 'next/router';

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the login API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.status === 200) {
        console.log('Login successful');
        router.push('/');
      } else {
        // If login fails, handle the error (display a message, etc.)
        const data = await response.json();
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
