import React from 'react'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import StudentCard from '../../components/Student/studentCard';
import { Link } from 'react-router-dom';

export default function Examenespages() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Navbar className="w-1/4" />
      <div className="flex flex-1 flex-col">
        <Header className="w-full flex-shrink-0" />
        <Link to="/examen/1">
          <StudentCard />
        </Link>
      </div>
    </div>
  )
}
