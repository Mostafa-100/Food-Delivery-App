import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-76px)] bg-gray-100">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="text-xl text-gray-600 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Page404;
