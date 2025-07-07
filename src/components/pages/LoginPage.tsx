import React, { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';

import Button from '../common/Button';
import TextInput from '../common/TextInput';
import LogoAcorde from '../common/LogoAcorde';
import LetrasAcorde from '../common/LetrasAcorde';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string[] | string }>({});
  const navigate = useNavigate(); // Para redirigir luego del login

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(`http://cord.test/public/api/login?email=${email}&password=${password}`);

    if (!response.ok) {
      if (response.status === 401) {
        setErrors({ general: 'Credenciales inválidas.' });
      } else {
        setErrors({ general: 'Error en el servidor.' });
      }
      return;
    }

    const data = await response.json();
    console.log('Usuario autenticado:', data);
    navigate({ to: '/home' });

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    setErrors({ general: 'Error de red o del servidor.' });
  }
};

  return (
    <div className="flex max-w-screen h-screen items-center justify-center bg-[#F1EEF9]">
      <div className="max-w-screen-xl max-h-screen">
        <div className="text-center mb-20">
          <LogoAcorde style="mx-auto my-auto max-w-60 max-h-60 mb-4" src="/images/LogoAcordeAzul.png" />
          <LetrasAcorde style="text-3xl font-bold text-primary-dark" text="Bienvenido" />
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <TextInput
                id="email"
                text="Correo electrónico:"
                inputType="email"
                style="mb-4"
                placeholder="Digite su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors?.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
            </div>
            <div className="mb-6">
              <TextInput
                id="password"
                text="Contraseña:"
                inputType="password"
                style="mb-4"
                placeholder="Digite su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors?.password && <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>}
            </div>
            {errors?.general && <p className="text-red-500 text-xs mb-4">{errors.general}</p>}
            <div className="flex flex-col items-center justify-center">
              <Button
                type="submit"
                text="Iniciar Sesión"
                style="w-full bg-accent-brown hover:bg-[#E4C581] text-zinc-800 hover:text-zinc-600 font-bold py-3 rounded-lg text-lg mb-6"
              />
              {/*<Link to="/register" className="inline-block align-baseline font-bold text-sm text-primary-dark hover:text-accent-brown">
                ¿No tienes una cuenta? Regístrate
              </Link>
              <Link to="#" className="inline-block align-baseline font-bold text-sm text-primary-dark hover:text-accent-brown mt-2">
                ¿Olvidaste tu contraseña?
              </Link>}*/}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}