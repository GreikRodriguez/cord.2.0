// src/pages/RegisterPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router'; // Importa Link de TanStack Router

import Button from '../common/Button';
import TextInput from '../common/TextInput';
import LogoAcorde from '../common/LogoAcorde';
import LetrasAcorde from '../common/LetrasAcorde';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); // Campo para confirmar contraseña
  const [errors, setErrors] = useState<{ email?: string[]; password?: string[]; general?: string } | null>(null);
  const navigate = useNavigate();


  return (
    <div className="flex max-w-screen h-screen items-center justify-center bg-[#F1EEF9]">
      <div className="max-w-screen-xl max-h-screen">
        <div className="text-center mb-20">
          <LogoAcorde style="mx-auto my-auto max-w-60 max-h-60 mb-4" src="/images/LogoAcordeAzul.png" /> {/* Ruta ajustada para public/images */}
          <LetrasAcorde style="text-3xl font-bold text-primary-dark" text="Registrarse" /> {/* Usando primary-dark */}
        </div>
        <div>
          <form>
            <div className="mb-4">
              <TextInput
                id="email"
                text="Correo electronico"
                inputType="email" 
                style="mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors?.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
            </div>
            <div className="mb-4"> {/* Ajustado a mb-4 para consistencia */}
              <TextInput
                id="password"
                text="Contraseña"
                inputType="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors?.password && <p className="text-red-500 text-xs mt-1">{errors.password[0]}</p>}
            </div>
            <div className="mb-6">
              <TextInput
                id="password_confirmation" 
                text="Confirmar Contraseña"
                inputType="password"
                style="mb-4"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            {errors?.general && <p className="text-red-500 text-xs mb-4">{errors.general}</p>} {/* Errores generales */}
            <div className="flex items-center justify-center">
              <Button
                type="submit" // Importante: type="submit" para enviar el formulario
                style="w-full bg-accent-brown hover:bg-[#E4C581] text-zinc-800 hover:text-zinc-600 font-bold py-3 rounded-lg text-lg mb-6"
                text="Registrarse"
              // onClick={handleAnyClick} // No necesario si type="submit" está en el botón y onSubmit en el form
              />
            </div>
          </form>
        </div>
        {/* Enlace para ir a la página de login */}
        <div className="text-center mt-4"> {/* Añadido margen superior */}
          <label className="block text-gray-700 text-sm font-semibold">
            ¿Ya tienes una cuenta? {' '}
            <Link to="/login" className="text-accent-brown hover:text-[#A38D6D]">
              Inicia sesión
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}