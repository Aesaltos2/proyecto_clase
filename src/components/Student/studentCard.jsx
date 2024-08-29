import React, { useState, useEffect } from 'react';
import axios from 'axios';  

const StudentCard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        
        const fetchExams = async () => {
            try {
                const response = await axios.get('/api/examenes');  
                setCards(response.data);
            } catch (error) {
                console.error('Error al obtener los exámenes', error);
            }
        };

        fetchExams();
    }, []);

    return (
        <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
                {cards.map((card) => (
                    <div key={card._id} className="max-w-xs p-4 bg-white border-4 border-blue-400 rounded-xl shadow-md">
                        <h2 className="text-orange-500 text-xl font-bold mb-2 text-center">Exam Info</h2>
                        <p className="text-gray-700 text-sm">
                            Curso: {card.curso}
                            <br />
                            Calificación Mínima: {card.calificacionMinima}
                            <br />
                            Duración: {card.duracion}
                            <br />
                            Preguntas: {card.preguntas.length}  
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentCard;
