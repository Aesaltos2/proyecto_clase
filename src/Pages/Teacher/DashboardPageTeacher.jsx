import React from 'react';
import Header from '../../components/Header';
import NavbarTeacher from '../../components/NavbarTeacher';

export default function DashboardPageTeacher() {
  return (
    <div className="h-screen flex overflow-hidden">
      <NavbarTeacher className="w-1/4" />
      <div className="flex flex-1 flex-col">
        <Header className="w-full flex-shrink-0" />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Bienvenido</h1>
        </div>
      </div>
    </div>
  );
}
