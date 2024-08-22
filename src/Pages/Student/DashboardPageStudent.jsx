import React, { useContext } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Authcontext } from '../../context/AuthContext';

export default function DashboardPageStudent() {
  const { dataUser, logout, options, modal } = useContext(Authcontext);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar className="w-1/4" />
      <div className="flex flex-1 flex-col">
        <Header className="w-full flex-shrink-0" />
        <main className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Bienvenido, {dataUser?.name}
          </h1>
          <img
            className="rounded-lg"
            src={dataUser?.photo ? `http://localhost:3000/api/user/image/${dataUser.photo}` : profile}
            width={320}
            height={320}
            alt={dataUser?.name || "Imagen del usuario"}
          />
        </main>
      </div>
    </div>
  );
}
