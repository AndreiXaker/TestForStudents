import { useState, useEffect } from "react";
import { questions } from "../data/questions.ts";

export default function Body({ currentStep, handleStepChange }) {
    const [answers, setAnswers] = useState(() => {
        const saved = localStorage.getItem('answers');
        return saved ? JSON.parse(saved) : {};
    });

    // При каждом изменении answers, сохраняем их в localStorage
    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
    }, [answers]);

    const handleAnswerChange = (questionId, value, isCheckbox = false) => {
        const newAnswers = { ...answers };
        if (isCheckbox) {
            const currentValues = newAnswers[questionId] || [];
            if (currentValues.includes(value)) {
                newAnswers[questionId] = currentValues.filter(item => item !== value);
            } else {
                newAnswers[questionId] = [...currentValues, value];
            }
        } else {
            newAnswers[questionId] = value;
        }
        setAnswers(newAnswers);
    };

    const handleNextQuestion = () => {
        if (currentStep < questions.length - 1) {
            handleStepChange(currentStep + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentStep > 0) {
            handleStepChange(currentStep - 1);
        }
    };

    const currentQuestion = questions[currentStep];
    const currentAnswer = answers[currentQuestion.id] || '';

    return (
        <div className="mt-4">
            <p className="font-medium text-lg mb-4">{currentQuestion.question}</p>
            <div className="space-y-2">
                {currentQuestion.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <input
                            type={currentQuestion.type === 'multiple-choice' ? 'checkbox' : 'radio'}
                            name={currentQuestion.type}
                            className="text-red-600 focus:ring-red-500 border-gray-300 w-5 h-5"
                            checked={currentQuestion.type === 'multiple-choice' ? currentAnswer.includes(option) : currentAnswer === option}
                            onChange={e => handleAnswerChange(currentQuestion.id, option, currentQuestion.type === 'multiple-choice')}
                            value={option}
                        />
                        <label className="block text-sm font-medium text-gray-700">{option}</label>
                    </div>
                ))}
                {currentQuestion.type === 'text' && (
                    <input
                        type="text"
                        className="text-gray-700 focus:ring-red-500 border-gray-300 resize-x"
                        placeholder="Введите ваш ответ здесь..."
                        value={currentAnswer}
                        onChange={e => handleAnswerChange(currentQuestion.id, e.target.value)}
                    />
                )}
                {currentQuestion.type === 'long-answer' && (
                    <textarea
                        className="text-gray-700 focus:ring-red-500 border-gray-300 resize-x"
                        rows={5}
                        placeholder="Введите ваш развернутый ответ здесь..."
                        value={currentAnswer}
                        onChange={e => handleAnswerChange(currentQuestion.id, e.target.value)}
                    />
                )}
            </div>
            <div className="flex space-x-4 mt-4">
                <button onClick={handlePreviousQuestion} className="px-4 py-2 bg-gray-200 rounded text-gray-800">Назад</button>
                <button onClick={handleNextQuestion} className="px-4 py-2 bg-blue-500 rounded text-white">Вперед</button>
            </div>
        </div>
    );
}
