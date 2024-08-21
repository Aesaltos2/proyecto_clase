import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

export default function DashboardPageStudent() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Navbar className="w-1/4 h-full" />
      <div className="flex flex-col flex-1">
        <Header className="w-full" />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Bienvenido</h1>
        </div>
      </div>
    </div>
  );
}
