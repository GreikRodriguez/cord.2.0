interface LetrasAcordeProps {
    style: string;
    text: string;
}
 
export default function LetrasAcorde(props: LetrasAcordeProps ) {
  return (
    <button className={props.style}>
      {props.text}
    </button>
  );
}