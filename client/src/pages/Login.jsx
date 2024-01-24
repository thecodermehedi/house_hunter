import useAuth from "@/hooks/useAuth";
import {useState} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const {register, handleSubmit} = useForm();
  const {loginUser} = useAuth();
  const handleLogin = async (data) => {
    const res = await loginUser(data.email, data.password);
    console.log(res);
    if (res.success) {
      toast.success(res.message);
      navigate("/dashboard");
      return;
    }
    toast.error(res.message);
  };
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-4 pb-10">
      <div className="max-w-sm  w-full space-y-5">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <Link to="/" className="flex items-center flex-col ">
              <img src="/icon.svg" alt="icon" className="size-20" />
              <h1 className="text-2xl font-bold sm:text-3xl">HouseHunter</h1>
            </Link>
            <p className="text-center">
              Don&#39;t have an account?{" "}
              <Link
                to={"/auth/register"}
                className="font-medium text-black hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-5 border border-gray-200 rounded-lg shadow-sm p-5"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", {required: true})}
                className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm "
                required
              />
            </div>
            <div className="relative">
              <label className="font-medium">Password</label>
              <button
                type="button"
                className="text-gray-400 absolute right-3 top-10 my-auto active:text-gray-600"
                onClick={() => setPasswordHidden(!isPasswordHidden)}
              >
                {isPasswordHidden ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
              <input
                type={isPasswordHidden ? "password" : "text"}
                id="password"
                name="password"
                {...register("password", {required: true})}
                className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-black border duration-150 cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <Link to="#" className="text-center text-black hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-black   hover:rounded-lg duration-150"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
