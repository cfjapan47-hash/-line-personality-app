"use client";

import { useEffect, useState } from "react";
import { MBTIScore, MBTIType } from "@/types/question";
import { createEmptyScore } from "@/lib/mbti-calculator";
import ProfileSummary from "@/components/ProfileSummary";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ReportPage() {
  const [mbtiType, setMbtiType] = useState<MBTIType | null>(null);
  const [mbtiScore, setMbtiScore] = useState<MBTIScore>(createEmptyScore());

  useEffect(() => {
    const saved = localStorage.getItem("personality_state");
    if (saved) {
      const state = JSON.parse(saved);
      if (state.mbtiType) {
        setMbtiType(state.mbtiType);
        setMbtiScore(state.mbtiScore || createEmptyScore());
      }
    }
  }, []);

  if (!mbtiType) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            まだ診断が完了していません
          </h2>
          <p className="text-gray-500 mb-6">
            60問の性格診断を完了すると、詳しいレポートが表示されます。
          </p>
          <Link href="/">
            <Button className="bg-[#06C755] hover:bg-[#04a847] text-white rounded-xl">
              診断に戻る
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center p-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-lg font-bold text-gray-700">性格レポート</h1>
      </div>
      <ProfileSummary mbtiType={mbtiType} mbtiScore={mbtiScore} />
      <div className="mt-6">
        <Link href="/">
          <Button variant="outline" className="rounded-xl">
            トップに戻る
          </Button>
        </Link>
      </div>
    </main>
  );
}
