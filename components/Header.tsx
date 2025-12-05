import { ChefHat } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full p-4 flex items-center justify-center bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b-4 border-yellow-200">
            <div className="flex items-center gap-2">
                <div className="bg-yellow-400 p-2 rounded-full border-2 border-yellow-600">
                    <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl text-yellow-600 drop-shadow-sm">
                    아침 대장정
                </h1>
            </div>
        </header>
    );
}
