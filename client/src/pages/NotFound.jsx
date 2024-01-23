import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-black font-semibold">404</h3>
          <p className="text-black text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-500">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="block py-2 px-4 text-white font-medium bg-black duration-150 hover:rounded-lg"
            >
              Go back
            </Link>
            <Link
              to="#"
              className="block py-2 px-4 text-black hover:bg-black border-black font-medium duration-150 hover:text-white border "
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
