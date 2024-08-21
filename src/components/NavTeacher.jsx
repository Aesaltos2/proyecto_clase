import React from "react";

const NavTeacher = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-lg flex flex-col gap-5 ">

      <figure className="flex justify-center items-center  ">
        <img src="/logo2.png" alt="Logo" className="w-40 " />
      </figure>

      <div className="w-full h-[90%]  flex flex-col justify-around ">

        <div className="flex flex-col gap-5 ">
          <button className="w-full px-4 py-3  bg-blue-700 rounded-xl hover:text-black hover:bg-white hover:ring-2 hover:ring-blue-700 text-white uppercase">
            Exámenes
          </button>

          <button className="w-full px-4 py-3  bg-blue-700 rounded-xl hover:text-black hover:bg-white hover:ring-2 hover:ring-blue-700 text-white uppercase">
            Mis Alumnos
          </button>
        </div>

        <div className="">
          <button className="w-full px-4 py-3  bg-green-950 rounded-xl hover:text-black hover:bg-white hover:ring-2 hover:ring-green-950 text-white uppercase">
            Nuevo Examen
          </button>
        </div>

      </div>

    </div>
  );
};

export default NavTeacher;
