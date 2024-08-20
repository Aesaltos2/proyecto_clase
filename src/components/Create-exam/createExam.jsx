
import React, { useState } from 'react';

const CreateExam = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isQuestionTypeVisible, setIsQuestionTypeVisible] = useState(false);
  const [isQuestionTypeDropdownOpen, setIsQuestionTypeDropdownOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [multipleChoices, setMultipleChoices] = useState(['', '', '']);

  const toggleLevelDropdown = () => {
    setIsLevelOpen(!isLevelOpen);
  };

  const toggleTypeDropdown = () => {
    setIsTypeOpen(!isTypeOpen);
  };

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setIsLevelOpen(false);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setIsQuestionTypeDropdownOpen(false);
    setQuestionText(''); // Reset question input when type changes
    setMultipleChoices(['', '', '']); // Reset multiple choices when type changes
  };

  const handleAddQuestionClick = () => {
    setIsQuestionTypeVisible(true);
  };

  const toggleQuestionTypeDropdown = () => {
    setIsQuestionTypeDropdownOpen(!isQuestionTypeDropdownOpen);
  };

  const handleQuestionChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleChoiceChange = (index, value) => {
    const newChoices = [...multipleChoices];
    newChoices[index] = value;
    setMultipleChoices(newChoices);
  };

  const handleSaveQuestion = () => {
    const newQuestion = {
      type: selectedType,
      text: questionText,
      choices: selectedType === 'Opción múltiple' ? multipleChoices : null,
    };
    setQuestions([...questions, newQuestion]);
    setIsQuestionTypeVisible(false);
    setSelectedType('');
    setIsQuestionTypeDropdownOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">Crear examen</h1>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Elige el nivel:</label>
          <div className="relative">
            <button 
              onClick={toggleLevelDropdown} 
              className="w-full border border-gray-400 p-2 text-left flex justify-between items-center"
            >
              {selectedLevel || 'Nivel:'}
              <span className="ml-2">&#9660;</span> {/* Icono de flecha hacia abajo */}
            </button>
            {isLevelOpen && (
              <div className="absolute w-full bg-white border border-gray-400 mt-1 rounded-lg z-10">
                <button 
                  onClick={() => handleLevelClick('Elementary')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Elementary
                </button>
                <button 
                  onClick={() => handleLevelClick('A1')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  A1
                </button>
                <button 
                  onClick={() => handleLevelClick('A2')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  A2
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Elige el tipo:</label>
          <div className="relative">
            <button 
              onClick={toggleTypeDropdown} 
              className="w-full border border-gray-400 p-2 text-left flex justify-between items-center"
            >
              {selectedType || 'Tipo:'}
              <span className="ml-2">&#9660;</span> {/* Icono de flecha hacia abajo */}
            </button>
            {isTypeOpen && (
              <div className="absolute w-full bg-white border border-gray-400 mt-1 rounded-lg z-10">
                <button 
                  onClick={() => handleTypeClick('Pregunta simple')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Pregunta simple
                </button>
                <button 
                  onClick={() => handleTypeClick('Opción múltiple')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Opción múltiple
                </button>
                <button 
                  onClick={() => handleTypeClick('Video')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Video
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 flex justify-end">
          <button 
            onClick={handleAddQuestionClick} 
            className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-300"
          >
            Agregar pregunta
          </button>
        </div>

        {isQuestionTypeVisible && (
          <div className="mb-6">
            <button 
              onClick={toggleQuestionTypeDropdown} 
              className="w-full border border-gray-400 p-2 text-left flex justify-between items-center"
            >
              {selectedType || 'Elija opción'}
              <span className="ml-2">&#9660;</span> {/* Icono de flecha hacia abajo */}
            </button>
            {isQuestionTypeDropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-400 mt-1 rounded-lg z-10">
                <button 
                  onClick={() => handleTypeClick('Pregunta simple')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Pregunta simple
                </button>
                <button 
                  onClick={() => handleTypeClick('Opción múltiple')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Opción múltiple
                </button>
                <button 
                  onClick={() => handleTypeClick('Video')} 
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Video
                </button>
              </div>
            )}
          </div>
        )}

        {selectedType && (
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Escribe la pregunta:</label>
            <input 
              type="text" 
              value={questionText}
              onChange={handleQuestionChange}
              className="w-full border border-gray-400 p-2 mb-4 rounded-lg"
              placeholder="Escribe la pregunta aquí"
            />
            {selectedType === 'Opción múltiple' && (
              <div className="space-y-2">
                {multipleChoices.map((choice, index) => (
                  <input
                    key={index}
                    type="text"
                    value={choice}
                    onChange={(e) => handleChoiceChange(index, e.target.value)}
                    className="w-full border border-gray-400 p-2 rounded-lg"
                    placeholder={`Opción ${index + 1}`}
                  />
                ))}
              </div>
            )}
            <button 
              onClick={handleSaveQuestion} 
              className="bg-green-500 text-white rounded-lg py-2 px-4 mt-4 w-full hover:bg-green-600 transition duration-300"
            >
              Guardar pregunta
            </button>
          </div>
        )}

        <button className="bg-green-500 text-white rounded-lg py-2 px-4 w-full hover:bg-green-600 transition duration-300">
          Crear examen
        </button>
      </div>
    </div>
  );
};

export default CreateExam;
