"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MBTIScore } from "@/types/question";
import { getDiagnosisProgress } from "@/lib/mbti-calculator";

interface AnswerResultProps {
  answeredCount: number;
  totalQuestions: number;
  mbtiScore: MBTIScore;
  onClose: () => void;
}

export default function AnswerResult({
  answeredCount,
  totalQuestions,
  mbtiScore,
  onClose,
}: AnswerResultProps) {
  const progress = getDiagnosisProgress(answeredCount, totalQuestions);

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0 overflow-hidden">
      <CardContent className="pt-8 pb-6 px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-[#06C755]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          回答完了!
        </h2>

        <p className="text-gray-500 mb-6">
          今日の質問に回答しました
        </p>

        {/* 進捗バー */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>診断進捗</span>
            <span>{answeredCount} / {totalQuestions} 問</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-[#06C755] to-[#04a847] h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {progress < 100
              ? `あと${totalQuestions - answeredCount}問で性格タイプが判明します`
              : "性格タイプが確定しました！"}
          </p>
        </div>

        {/* 簡易スコア表示 */}
        {answeredCount > 0 && (
          <div className="grid grid-cols-4 gap-2 mb-6">
            {([
              ["E", "I", mbtiScore.E, mbtiScore.I],
              ["S", "N", mbtiScore.S, mbtiScore.N],
              ["T", "F", mbtiScore.T, mbtiScore.F],
              ["J", "P", mbtiScore.J, mbtiScore.P],
            ] as [string, string, number, number][]).map(([a, b, sa, sb]) => {
              const total = sa + sb || 1;
              const pctA = Math.round((sa / total) * 100);
              return (
                <div key={a + b} className="text-center">
                  <div className="text-xs text-gray-400 mb-1">{a}/{b}</div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#06C755] rounded-full"
                      style={{ width: `${pctA}%` }}
                    />
                  </div>
                  <div className="text-xs font-medium text-gray-600 mt-1">
                    {pctA > 50 ? a : pctA < 50 ? b : "?"}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <Button
          onClick={onClose}
          className="w-full bg-[#06C755] hover:bg-[#04a847] text-white rounded-xl py-6 text-base"
        >
          閉じる
        </Button>
      </CardContent>
    </Card>
  );
}
