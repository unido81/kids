import { AlertTriangle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full p-4 bg-orange-100 mt-auto border-t-4 border-orange-200">
            <div className="flex items-center justify-center gap-2 text-orange-700">
                <AlertTriangle className="w-6 h-6" />
                <p className="text-sm md:text-base">
                    보호자의 도움이 필요할 땐 꼭 부모님을 불러주세요!
                </p>
            </div>
        </footer>
    );
}
