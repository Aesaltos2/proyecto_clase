import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import Rediriguir from './Pages/Rediriguir'
import Proteger from './Pages/Proteger'
import DashboardPageStudent from './Pages/Student/DashboardPageStudent'
import Examenespages from './Pages/Student/Examenespages'
import Exampage from './Pages/Student/Exampage'
import VideoPage from './Pages/Student/VideoPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Rediriguir/>}/>
      <Route path='/login' element={<LoginPage />} />
      {/* <Route  element={<Proteger/>} > */}
        <Route path='/dashboard' element={<DashboardPageStudent/>} />
        <Route path='/examenes' element={<Examenespages/>} />
        <Route path='/examen/:id' element={<Exampage/>} />
        <Route path='/videos/me' element={<VideoPage/>} />
      {/* </Route> */}
    </Routes>
  )
}

