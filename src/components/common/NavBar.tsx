import Button from './Button'; // Importa tu componente Button

interface NavBarProps {
  onMenuClick?: () => void; // Callback para cuando se haga click en el botón Menú
}

export default function NavBar(props: NavBarProps) {
  return (
    <div className="bg-sky-900 p-4 flex justify-between items-center rounded-b-lg">
      <Button
        text="Menú"
        style="text-white text-lg font-semibold bg-accent-brown rounded-full px-4 py-2"
        onClick={props.onMenuClick} // Asigna el callback
      />
    </div>
  );
}