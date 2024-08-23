import React from 'react'

const Fotocheck = () => {
  return (
    
        <div className="p-20">
          <div className="w-[450px] h-[200px] rounded-xl border border-black flex bg-[url('/public/wallpaper-login.jpg/')]">

             <div className='w-2/3  p-7 flex flex-col justify-between'>

             <h1 className='text-center font-bold text-[20px]'>INGLES </h1>
             <div className=''>
                <h3 className='font-medium text-[15px]'>Juan Manuel</h3>
                <h3 className='font-medium text-[15px]'>Martinez Carhuapoma</h3>
                <h3 className='font-medium text-[15px]'>Corre@example.net</h3>
                <h3 className='font-medium text-[15px]'>documento</h3>
             </div>


             </div>

             <div className='w-1/1 p-7'>
             <figure className='w-full h-full rounded-xl bg-white'>
                <img src="/public/logos del header/usuario_default.png" alt="" className='w-full h-full rounded-r-xl'/>
             </figure>
             </div>
          </div>
        </div>
  )
}

export default Fotocheck
