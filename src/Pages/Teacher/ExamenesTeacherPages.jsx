import React from 'react'
import Header from '../../components/Header';
import Navbar from '../../components/NavbarTeacher';
import StudentCard from '../../components/Student/studentCard';

export default function ExamenesTeacherPages() {
  return (
    <div className="h-screen flex overflow-hidden">
    <Navbar className="w-1/4" />
    <div className="flex flex-1 flex-col">
        <Header className="w-full flex-shrink-0" />
        <StudentCard/>
    </div>
</div>
  )
}
