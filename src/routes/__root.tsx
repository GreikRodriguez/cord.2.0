// src/routes.tsx
import { RootRoute } from '@tanstack/react-router';

// Componente simple para mostrar errores
function MyErrorComponent() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <h2>¡Ups! Algo salió mal.</h2>
      <p>Lamentamos los inconvenientes. Por favor, intenta de nuevo más tarde.</p>
    </div>
  );
}

export const rootRoute = new RootRoute({
  errorComponent: MyErrorComponent, // <--- Agrega esta línea
});

// ... el resto de tus rutas y routeTree