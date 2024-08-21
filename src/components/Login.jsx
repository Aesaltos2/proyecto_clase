import React from "react";

const Login = () => {
  return (
    <main className="bg-[url('/wallpaper-login.jpg')] h-screen w-screen flex justify-center items-center">
      <div className="sm:h-[40%] sm:w-[70%] rounded-xl bg-white flex flex-col sm:flex-row">
        <div className="sm:w-[50%] w-full  sm:border-r sm:border-r-gray-400 flex flex-col justify-between gap-5 my-3 p-2 items-center">
          <figure className="h-[25%] w-[80%]">
            <img src="/logo 2023.png" alt="" className="w-full h-full" />
          </figure>

          <form
            action=""
            className="flex flex-col justify-between gap-2 p-10 h-[80%] w-full "
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
              className="border border-gray-500 p-[2%] rounded-lg"
            >
              <input
                type="text"
                name="password"
                placeholder="password"
                className="outline-none"
              />
            </label>
            <button
              type="submit"
              className="border border-black p-[2%] rounded-lg bg-blue-700 text-white font-medium"
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
