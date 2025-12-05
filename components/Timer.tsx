"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimerProps {
    seconds: number;
    onComplete: () => void;
}

export default function Timer({ seconds, onComplete }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        if (timeLeft <= 0) {
            onComplete();
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, onComplete]);

    const progress = ((seconds - timeLeft) / seconds) * 100;

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="#FEF08A"
                        strokeWidth="8"
                        fill="transparent"
                    />
                    <motion.circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="#FACC15"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={377}
                        strokeDashoffset={377 - (377 * progress) / 100}
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 377 }}
                        animate={{ strokeDashoffset: 377 - (377 * progress) / 100 }}
                        transition={{ duration: 1, ease: "linear" }}
                    />
                </svg>
                <div className="absolute text-4xl font-bold text-yellow-600">
                    {timeLeft}
                </div>
            </div>
            <p className="mt-2 text-lg text-yellow-700 animate-pulse">
                기다리는 중...
            </p>
        </div>
    );
}
