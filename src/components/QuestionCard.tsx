"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Question, QuestionOption } from "@/types/question";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  onAnswer: (option: QuestionOption) => void;
}

const phaseLabels: Record<string, { label: string; color: string }> = {
  diagnosis: { label: "性格診断", color: "bg-blue-500" },
  communication: { label: "コミュニケーション", color: "bg-green-500" },
  interest: { label: "興味関心", color: "bg-purple-500" },
  worry: { label: "悩み相談", color: "bg-orange-500" },
};

export default function QuestionCard({ question, questionNumber, onAnswer }: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const phase = phaseLabels[question.phase] || { label: "質問", color: "bg-gray-500" };

  const handleSelect = (option: QuestionOption) => {
    if (isAnimating) return;
    setSelected(option.label);
    setIsAnimating(true);

    setTimeout(() => {
      onAnswer(option);
      setSelected(null);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0 overflow-hidden">
      <CardHeader className="pb-3 bg-gradient-to-r from-[#06C755] to-[#04a847] text-white">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={cn("text-white border-0", phase.color)}>
            {phase.label}
          </Badge>
          <span className="text-sm opacity-80">Q{questionNumber}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-4 px-5">
        <p className="text-lg font-medium text-gray-800 mb-6 leading-relaxed">
          {question.text}
        </p>
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleSelect(option)}
              disabled={isAnimating}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all duration-200",
                "hover:border-[#06C755] hover:bg-green-50",
                "active:scale-[0.98]",
                selected === option.label
                  ? "border-[#06C755] bg-green-50 scale-[0.98]"
                  : "border-gray-200 bg-white"
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                    selected === option.label
                      ? "bg-[#06C755] text-white"
                      : "bg-gray-100 text-gray-600"
                  )}
                >
                  {option.label}
                </span>
                <span className="text-gray-700 pt-1 leading-relaxed">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
