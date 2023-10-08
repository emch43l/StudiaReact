import { Link } from "react-router-dom";

export default function MainCardHeader({
  isSubPage,
  text,
}: {
  isSubPage: boolean;
  text: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold px-4 py-3">{text}</h1>
      {isSubPage ? (
        <Link to="/" className="btn btn-sm mx-4">
          <i className="fas fa-arrow-left"></i>
        </Link>
      ) : null}
    </div>
  );
}
