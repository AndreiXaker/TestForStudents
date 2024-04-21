type QuestionType = 'single-choice' | 'multiple-choice' | 'text' | 'long-answer';

interface Question {
    id: number;
    type: QuestionType;
    question: string;
    options?: string[];
    userAnswer?: string | string[];
    correctAnswer: string | string[];
}

export const questions: Question[] = [
    {
        id: 1,
        type: 'single-choice',
        question: 'Какой из этих инструментов используется для управления состоянием в React-приложениях?',
        options: ['Redux', 'Webpack', 'Express', 'Axios'],
        correctAnswer: 'Redux',
    },
    {
        id: 2,
        type: 'text',
        question: 'Какая функция используется для создания компонентов в React?',
        correctAnswer: 'React.createElement()',
    },
    {
        id: 3,
        type: 'multiple-choice',
        question: 'Какие HTTP методы вы должны знать для frontend-разработки?',
        options: ['GET', 'POST', 'SLEEP', 'PUT', 'DELETE'],
        correctAnswer: ['GET', 'POST', 'PUT', 'DELETE'],
    },
    {
        id: 4,
        type: 'text',
        question: 'Какой атрибут используется для создания двустороннего связывания данных в Angular?',
        correctAnswer: '[(ngModel)]',
    },
    {
        id: 5,
        type: 'long-answer',
        question: 'Можете ли вы объяснить, как работает виртуальный DOM в React и каковы его преимущества по сравнению с реальным DOM?',
        correctAnswer: 'Кандидат должен объяснить, что виртуальный DOM - это легковесная копия реального DOM, хранящаяся в памяти, и React использует его для оптимизации обновлений DOM, выполняя сначала изменения на виртуальном DOM, вычисляя разницу (diff) между виртуальным и реальным DOM и обновляя реальный DOM минимально возможным количеством манипуляций.'
    }
]