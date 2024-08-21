import React from 'react'
import ExamForm from '../../components/Student/studentForm'
import Header from '../../components/Header';
import Navbar from '../../components/NavbarTeacher';

export default function ExamTeacherPage() {
    return (
        <div className="h-screen flex overflow-hidden">
            <Navbar className="w-1/4" />
            <div className="flex flex-1 flex-col">
                <Header className="w-full flex-shrink-0" />
                <ExamForm />
            </div>
        </div>

    )
}
