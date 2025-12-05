"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface SuccessProps {
    onRestart: () => void;
}

export default function Success({ onRestart }: SuccessProps) {
    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center space-y-8">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="text-9xl"
            >
                🏆
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-yellow-600 mb-2">
                    미션 성공!
                </h2>
                <p className="text-xl text-gray-600">
                    오늘 아침도 든든하게 먹었어요!
                    <br />
                    정말 대단해요!
                </p>
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onRestart}
                className="bg-orange-400 text-white text-xl px-8 py-4 rounded-2xl shadow-[0_4px_0_rgb(194,65,12)] active:shadow-none active:translate-y-1 transition-all"
            >
                내일 또 만나요! 👋
            </motion.button>
        </div>
    );
}
