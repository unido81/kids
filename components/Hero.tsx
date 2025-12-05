"use client";

import { motion } from "framer-motion";

interface HeroProps {
    onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
    return (
        <div className="flex flex-col items-center text-center gap-8">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="relative"
            >
                <div className="text-8xl">🌞</div>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-2 -right-2 text-4xl"
                >
                    ✨
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
            >
                <h2 className="text-3xl text-yellow-800">
                    좋은 아침! <br />
                    <span className="text-orange-500">꼬마 셰프님</span>
                </h2>
                <p className="text-lg text-gray-600">오늘 아침은 뭘 먹을까요?</p>
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onStart}
                className="bg-yellow-400 text-white text-xl px-8 py-4 rounded-2xl shadow-[0_4px_0_rgb(202,138,4)] active:shadow-none active:translate-y-1 transition-all"
            >
                미션 시작하기! 🚀
            </motion.button>
        </div>
    );
}
