import toast from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const Register = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();
  const handleRegister = async (data) => {
    console.log(data);
  };

  const {data: geocode = []} = useQuery({
    queryKey: ["geoCode"],
    queryFn: async () => {
      const {data} = await axios(
        "https://gist.githubusercontent.com/thecodermehedi/8c93d35953155f71475ddd88b2da0b07/raw/da3b3bf8e09f37671ab6cbbf9b6e393f0164d019/geocode.json"
      );
      return data;
    },
  });

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-4 pb-10">
      <div className="max-w-sm md:max-w-3xl w-full space-y-5">
        <div className="text-center pb-5">
          <div className="mt-5 space-y-2">
            <Link to="/" className="flex items-center flex-col ">
              <img src="/icon.svg" alt="icon" className="size-20" />
              <h1 className="text-2xl font-bold sm:text-3xl">HouseHunter</h1>
            </Link>
            <p className="">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-medium text-black hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-5 border border-gray-200 rounded-lg shadow-sm p-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", {required: true})}
                className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
                required
              />
            </div>
            <div>
              <label className="font-medium">Phone Number</label>
              <div className="flex items-center">
                <Select defaultValue="+880">
                  <SelectTrigger className="w-fit mt-2 border border-r-0   text-black bg-white outline-none focus:bg-transparent shadow-sm">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="h-60">
                    {geocode?.map((item, index) => {
                      return (
                        <SelectItem key={index} value={item.dial_code}>
                          {`${item.flag} ${item.code} (${item.dial_code})`}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <input
                  type="text"
                  id="phone"
                  name="phone"
                  {...register("phone", {required: true})}
                  className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border border-l-0 focus:bg-transparent shadow-sm"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  required
                />
              </div>
            </div>
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
            <div className="col-span-2">
              <label className="font-medium">Role</label>
              <Select defaultValue="renter">
                <SelectTrigger className="w-full  mt-2 px-3 py-2  text-black bg-white outline-none border focus:bg-transparent shadow-sm selection:bg-white">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">House Owner</SelectItem>
                  <SelectItem value="renter">House Renter</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white font-medium bg-black"
          >
            Create account
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
