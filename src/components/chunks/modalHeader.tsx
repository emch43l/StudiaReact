export default function ModalHeader({text} : {text: string}) {
  return (
    <div>
      <h1 className="text-xl font-bold py-2">{text}</h1>
    </div>
  );
}
