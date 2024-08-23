import React, { useState } from 'react';

const generateRandomText = () => {
    const texts = [
        'El examen de matemáticas cubrirá temas de álgebra, geometría y trigonometría. Asegúrate de repasar las fórmulas clave y resolver problemas prácticos para prepararte adecuadamente.',
        'En el examen de ciencias, se evaluará tu comprensión de biología, química y física. Estudia los conceptos básicos de cada materia y repasa los experimentos realizados en clase.',
        'El examen de historia se centrará en los eventos importantes del siglo XX. Prepárate para responder preguntas sobre las guerras mundiales, la Guerra Fría y los cambios políticos significativos.',
        'Para el examen de literatura, revisa las principales obras y autores estudiados durante el semestre. Asegúrate de conocer las tramas, personajes y temas de cada libro para poder analizar y discutir efectivamente.'
    ];
    return texts[Math.floor(Math.random() * texts.length)];
};

const StudentCard = () => {
    const [cards, setCards] = useState([{ id: 0, text1: generateRandomText(), text2: generateRandomText() }]);
    const addCard = () => {

        const newCard = { id: cards.length, text1: generateRandomText(), text2: generateRandomText() };
        setCards([...cards, newCard]);
    };

    return (
        <div className="p-4">
            <button onClick={addCard} className="mb-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">+</button>
            <div className="grid grid-cols-3 gap-4">
                {cards.map((card) => (
                    <div key={card.id} className="max-w-xs p-4 bg-white border-4 border-blue-400 rounded-xl shadow-md">
                        <h2 className="text-orange-500 text-xl font-bold mb-2 text-center">Exam Info</h2>
                        <p className="text-gray-700 text-sm">
                            {card.text1}
                            <br /><br />
                            {card.text2}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentCard;
