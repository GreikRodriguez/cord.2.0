interface LogoAcordeProps {
    src: string;
    style: string;
}
 
export default function LogoAcordeProps(props: LogoAcordeProps) {
  return (
    <img className={props.style} src={props.src} alt="Logo Acorde"/>
  );
}