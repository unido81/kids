"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { recipes } from "@/data/recipes";
import Timer from "./Timer";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface CookingWizardProps {
    menuId: string;
    onComplete: () => void;
    onBack: () => void;
}

export default function CookingWizard({
    menuId,
    onComplete,
    onBack,
}: CookingWizardProps) {
    const recipe = recipes[menuId];
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isTimerDone, setIsTimerDone] = useState(false);

    if (!recipe) return <div>레시피를 찾을 수 없어요!</div>;

    const currentStep = recipe.steps[currentStepIndex];
    const isLastStep = currentStepIndex === recipe.steps.length - 1;
    const progress = ((currentStepIndex + 1) / recipe.steps.length) * 100;

    const handleNext = () => {
        if (isLastStep) {
            onComplete();
        } else {
            setCurrentStepIndex((prev) => prev + 1);
            setIsTimerRunning(false);
            setIsTimerDone(false);
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex((prev) => prev - 1);
            setIsTimerRunning(false);
            setIsTimerDone(false);
        } else {
            onBack();
        }
    };

    const showTimer = !!currentStep.timerSeconds && !isTimerDone;

    return (
        <div className="w-full max-w-md mx-auto flex flex-col h-full">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-4 rounded-full mb-6 overflow-hidden">
                <motion.div
                    className="h-full bg-yellow-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Step Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col items-center"
                    >
                        <div className="text-8xl mb-4 animate-bounce-slow">
                            {currentStep.emoji}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {currentStepIndex + 1}단계
                        </h3>
                        <p className="text-xl text-gray-700 break-keep">
                            {currentStep.text}
                        </p>
                        {currentStep.warning && (
                            <div className="mt-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm font-bold animate-pulse">
                                ⚠️ {currentStep.warning}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Timer Section */}
                {showTimer && (
                    <div className="mt-4">
                        {!isTimerRunning ? (
                            <button
                                onClick={() => setIsTimerRunning(true)}
                                className="bg-blue-400 text-white px-6 py-3 rounded-xl shadow-md active:scale-95 transition-transform"
                            >
                                타이머 시작! ⏱️
                            </button>
                        ) : (
                            <Timer
                                seconds={currentStep.timerSeconds!}
                                onComplete={() => setIsTimerDone(true)}
                            />
                        )}
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center">
                <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={handleNext}
                    disabled={showTimer && isTimerRunning} // Disable next while timer is running
                    className={`px-8 py-4 rounded-2xl text-xl font-bold shadow-lg transition-all flex items-center gap-2
            ${showTimer && isTimerRunning
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-yellow-400 text-white hover:bg-yellow-500 active:translate-y-1 active:shadow-none"
                        }`}
                >
                    {isLastStep ? "완료! 🎉" : "다음 단계 👉"}
                </button>
            </div>
        </div>
    );
}
