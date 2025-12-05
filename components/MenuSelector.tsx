"use client";

import { motion } from "framer-motion";

interface MenuSelectorProps {
    onSelect: (menuId: string) => void;
}

const menus = [
    {
        id: "cereal",
        name: "시리얼",
        emoji: "🥣",
        color: "bg-blue-100",
        borderColor: "border-blue-300",
    },
    {
        id: "toast",
        name: "토스트",
        emoji: "🍞",
        color: "bg-orange-100",
        borderColor: "border-orange-300",
    },
    {
        id: "yogurt",
        name: "요거트",
        emoji: "🥛",
        color: "bg-pink-100",
        borderColor: "border-pink-300",
    },
];

export default function MenuSelector({ onSelect }: MenuSelectorProps) {
    return (
        <div className="w-full space-y-6 text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-yellow-800"
            >
                오늘 아침 메뉴를 골라보세요!
            </motion.h2>

            <div className="grid grid-cols-1 gap-4">
                {menus.map((menu, index) => (
                    <motion.button
                        key={menu.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring", bounce: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelect(menu.id)}
                        className={`w-full p-6 rounded-2xl border-b-8 ${menu.color} ${menu.borderColor} flex items-center justify-between shadow-sm active:border-b-0 active:translate-y-2 transition-all`}
                    >
                        <span className="text-4xl">{menu.emoji}</span>
                        <span className="text-2xl font-bold text-gray-700">
                            {menu.name}
                        </span>
                        <span className="text-2xl">👉</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
