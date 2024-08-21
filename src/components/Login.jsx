import React, { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="bg-[url('/wallpaper-login.jpg')] h-screen w-screen flex justify-center items-center">
      <div className=" sm:h-1vh sm:w-[70%] rounded-xl bg-white flex flex-col  sm:flex-row">
        <div className="sm:w-[50%] w-full  sm:border-r sm:border-r-gray-400 flex flex-col justify-between gap-5 my-3 p-2 items-center">
          <figure className="h-[25%] w-[70%]">
            <img src="/logo 2023.png" alt="" className="w-full h-full" />
          </figure>

          <form
            action=""
            className="flex flex-col justify-between gap-2 p-[35px] h-[80%] w-full "
          >
            <label
              htmlFor=""
              className="border border-gray-500 rounded-lg p-[2%]"
            >
              <input
                type="email"
                name="email"
                placeholder="email"
                className="outline-none"
              />
            </label>
            <label
              htmlFor=""
              className="border border-gray-500 p-[2%] rounded-lg flex justify-between"
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="outline-none"
              />
                      <div
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer"
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
        </div>
            </label>
            <button
              type="submit"
              className=" p-[2%] rounded-lg bg-blue-700 text-white font-medium"
            >
              Acceder
            </button>
            <a href="" className="text-blue-700">
              ¿ Olvido su contraseña ?
            </a>
          </form>
        </div>

        <div className=" w-full sm:w-[50%] flex flex-col justify-evenly items-center">
          <div className="w-[80%] h-[70%] flex flex-col gap-5 p-16 justify-center">
            <h1 className="text-center">Ingresa con: </h1>
            <div className="w-full h-[90%] flex flex-col gap-2">
              <button className="border border-gray-300 p-[2%] rounded-lg flex gap-2">
                <img
                  src="/google.svg"
                  alt="logo de google"
                  className="w-[22px] h-[22px]"
                />
                <h1>Cuenta de google</h1>
              </button>
              <button className="border border-gray-300 p-[2%] rounded-lg flex gap-2">
                <img
                  src="/github.svg"
                  alt="logo de github"
                  className="w-[22px] h-[22px]"
                />
                <h1>Cuenta de github</h1>
              </button>
              <button className="border border-gray-300 p-[2%] rounded-lg flex gap-2">
                <img
                  src="/microsoft.svg"
                  alt="logo de microsoft"
                  className="w-[22px] h-[22px]"
                />
                <h1>Cuenta de microsoft</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
