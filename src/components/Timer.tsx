import {useEffect, useState} from "react";

export default function Timer({initialSeconds})  {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if(seconds > 0) {
            const interavalId : NodeJS.Timeout= setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            },1000);
            return () => clearInterval(interavalId);
        }
    },[seconds]);
    function formatTime(seconds: number) : string {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    return (
        <span
            className="flex items-center justify-center bg-red-500 text-white font-semibold text-sm rounded-md w-16 h-8 border-2 border-gray-300">
          {formatTime(seconds)}
        </span>
    )
}