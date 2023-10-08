export default function UserInfoModalRowChunk({
  val1,
  val2,
}: {
  val1: string;
  val2: string;
}) {
  return (
    <div>
      <span className="text-xs pr-3">{val1}</span>
      <span className="text-sm">{val2}</span>
    </div>
  );
}
