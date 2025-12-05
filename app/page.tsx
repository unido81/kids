"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import MenuSelector from "@/components/MenuSelector";
import CookingWizard from "@/components/CookingWizard";
import Success from "@/components/Success";
import { AnimatePresence, motion } from "framer-motion";

type Stage = "hero" | "menu" | "cooking" | "success";

export default function Home() {
  const [stage, setStage] = useState<Stage>("hero");
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const handleStart = () => {
    setStage("menu");
  };

  const handleMenuSelect = (menuId: string) => {
    setSelectedMenu(menuId);
    setStage("cooking");
  };

  const handleCookingComplete = () => {
    setStage("success");
  };

  const handleBackToMenu = () => {
    setStage("menu");
    setSelectedMenu(null);
  };

  const handleRestart = () => {
    setStage("hero");
    setSelectedMenu(null);
  };

  return (
    <AnimatePresence mode="wait">
      {stage === "hero" && (
        <motion.div
          key="hero"
          exit={{ opacity: 0, x: -100 }}
          className="w-full"
        >
          <Hero onStart={handleStart} />
        </motion.div>
      )}

      {stage === "menu" && (
        <motion.div
          key="menu"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="w-full"
        >
          <MenuSelector onSelect={handleMenuSelect} />
        </motion.div>
      )}

      {stage === "cooking" && selectedMenu && (
        <motion.div
          key="cooking"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="w-full h-full"
        >
          <CookingWizard
            menuId={selectedMenu}
            onComplete={handleCookingComplete}
            onBack={handleBackToMenu}
          />
        </motion.div>
      )}

      {stage === "success" && (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full"
        >
          <Success onRestart={handleRestart} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
