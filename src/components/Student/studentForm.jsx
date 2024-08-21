import { useState } from 'react';

const ExamForm = () => {
  const [question1, setQuestion1] = useState('');

  const handleQuestion1Change = (event) => {
    setQuestion1(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">Elementary</h1>
        
        <div className="mb-4">
          <label htmlFor="question1" className="block text-lg font-semibold">Pregunta 1:</label>
          <input 
            id="question1"
            type="text" 
            className="mt-2 w-full border-2 border-gray-300 rounded-lg p-2 text-orange-600" 
            value={question1} 
            onChange={handleQuestion1Change}
          />
        </div>

        <div className="mb-4">
          <p className="block text-lg font-semibold mb-2">Pregunta 2:</p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="question2" className="mr-2" />
              Opción 1
            </label>
            <label className="flex items-center">
              <input type="radio" name="question2" className="mr-2" />
              Opción 2
            </label>
            <label className="flex items-center">
              <input type="radio" name="question2" className="mr-2" />
              Opción 3
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="video" className="block text-lg font-semibold mb-2">
            Graba un video hablando de los animales:
          </label>
          <button className="bg-blue-500 text-white rounded-lg py-2 px-4 w-full hover:bg-blue-600 transition duration-300">
            Iniciar grabación
          </button>
        </div>

        <button className="bg-green-500 text-white rounded-lg py-2 px-4 w-full hover:bg-green-600 transition duration-300">
          Finalizar examen
        </button>
      </div>
    </div>
  );
}

export default ExamForm;





// import React from 'react';

// const ExamForm = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
//         <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">Elementary</h1>
        
//         <div className="mb-4">
//           <label htmlFor="question1" className="block text-lg font-semibold">Pregunta 1:</label>
//           <input 
//             id="question1"
//             type="text" 
//             className="mt-2 w-full border-2 border-gray-300 rounded-lg p-2 text-orange-600" 
//             value="qweasdasqwewq" 
//           />
//         </div>

//         <div className="mb-4">
//           <p className="block text-lg font-semibold mb-2">Pregunta 2:</p>
//           <div className="space-y-2">
//             <label className="flex items-center">
//               <input type="radio" name="question2" className="mr-2" />
//               Opción 1
//             </label>
//             <label className="flex items-center">
//               <input type="radio" name="question2" className="mr-2" />
//               Opción 2
//             </label>
//             <label className="flex items-center">
//               <input type="radio" name="question2" className="mr-2" />
//               Opción 3
//             </label>
//           </div>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="video" className="block text-lg font-semibold mb-2">
//             Graba un video hablando de los animales:
//           </label>
//           <button className="bg-blue-500 text-white rounded-lg py-2 px-4 w-full hover:bg-blue-600 transition duration-300">
//             Iniciar grabación
//           </button>
//         </div>

//         <button className="bg-green-500 text-white rounded-lg py-2 px-4 w-full hover:bg-green-600 transition duration-300">
//           Finalizar examen
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ExamForm;

