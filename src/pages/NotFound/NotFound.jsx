import { Link } from "react-router";
import error from "../../assets/img/error.png"

const NotFound = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-base-100 flex items-center justify-center px-3">
      <div className="absolute left-3 -bottom-20 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(103,148,164,0.4)_0%,_transparent_70%)] pointer-events-none z-0 blur-2xl"></div>
      <div className="absolute right-20 top-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(103,148,164,0.4)_0%,_transparent_70%)] pointer-events-none z-0 blur-2xl"></div>

      <div className="w-[90rem] bg-secondary/20 border border-primary backdrop-blur-xl rounded-2xl flex flex-col-reverse lg:flex-row justify-between xl:pt-48 pt-20 xl:pb-0 pb-16 xl:pl-36 pl-10 xl:pe-28 pe-7 z-50">
        <div>
          <h1 className="lg:text-7xl text-5xl font-bold mb-14">
            404 Error <br /> Oops
          </h1>
          <p className="text-xl font-light mb-20">
            A 404 is an HTTP status code that means you're <br /> able to
            communicate with the server but the server <br /> can't find the
            specific page
          </p>
          <Link className="btn btn-primary text-base" to="/">
            Back to Homepage
          </Link>
        </div>
        <div className="flex items-center justify-center mb-10 lg:mb-0">
          <img src={error} alt="image" className="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
