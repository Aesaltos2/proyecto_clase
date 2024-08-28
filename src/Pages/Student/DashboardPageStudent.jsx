import React, { useContext } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Authcontext } from '../../context/AuthContext';
import Fotocheck from '../../components/Fotocheck';

export default function DashboardPageStudent() {
  const { dataUser, logout, options, modal } = useContext(Authcontext);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar className="w-1/4" />
      <div className="flex flex-1 flex-col">
        <Header className="w-full flex-shrink-0" />
        <main className="flex flex-1 flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Bienvenido, {dataUser?.name || 'Estudiante'}
          </h1>
          <Fotocheck
            data={dataUser}
          />
          {modal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg">
                {/* Contenido del modal */}
                <button onClick={options} className="bg-red-500 text-white rounded-lg py-2 px-4">
                  Cerrar Modal
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
