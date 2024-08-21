import React from 'react';

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
    const text1 = generateRandomText();
    const text2 = generateRandomText();

    return (
        <div className="max-w-xs p-4 bg-white border-4 border-blue-400 rounded-xl shadow-md">
            <h2 className="text-orange-500 text-xl font-bold mb-2 text-center">Exam Info</h2>
            <p className="text-gray-700 text-sm">
                {text1}
                <br /><br />
                {text2}
            </p>
        </div>
    );
};

export default StudentCard;
