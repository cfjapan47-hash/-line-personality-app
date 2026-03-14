"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MBTIType, MBTIScore } from "@/types/question";
import { MBTI_DESCRIPTIONS, getAxisPercentage } from "@/lib/mbti-calculator";

interface ProfileSummaryProps {
  mbtiType: MBTIType;
  mbtiScore: MBTIScore;
}

export default function ProfileSummary({ mbtiType, mbtiScore }: ProfileSummaryProps) {
  const info = MBTI_DESCRIPTIONS[mbtiType];
  const pct = getAxisPercentage(mbtiScore);

  const axes: [string, string, number][] = [
    ["外向 (E)", "内向 (I)", pct.E],
    ["感覚 (S)", "直感 (N)", pct.S],
    ["思考 (T)", "感情 (F)", pct.T],
    ["判断 (J)", "知覚 (P)", pct.J],
  ];

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#06C755] to-[#04a847] text-white text-center pb-6">
        <Badge variant="secondary" className="mx-auto mb-2 bg-white/20 text-white border-0">
          あなたの性格タイプ
        </Badge>
        <div className="text-4xl font-bold tracking-wider mb-1">{mbtiType}</div>
        <div className="text-lg opacity-90">{info.name}</div>
      </CardHeader>
      <CardContent className="pt-6 pb-6 px-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{info.description}</p>

        <div className="space-y-4">
          {axes.map(([labelA, labelB, valueA]) => (
            <div key={labelA}>
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>{labelA}</span>
                <span>{labelB}</span>
              </div>
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#06C755] rounded-full transition-all duration-700"
                  style={{ width: `${valueA}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{valueA}%</span>
                <span>{100 - valueA}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
