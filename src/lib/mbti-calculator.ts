import { MBTIScore, MBTIType } from "@/types/question";

export function createEmptyScore(): MBTIScore {
  return { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
}

export function addScore(current: MBTIScore, addition: Record<string, number>): MBTIScore {
  const updated = { ...current };
  for (const [key, value] of Object.entries(addition)) {
    if (key in updated) {
      updated[key as keyof MBTIScore] += value;
    }
  }
  return updated;
}

export function calcMBTIType(score: MBTIScore): MBTIType {
  const EI = score.E >= score.I ? "E" : "I";
  const SN = score.S >= score.N ? "S" : "N";
  const TF = score.T >= score.F ? "T" : "F";
  const JP = score.J >= score.P ? "J" : "P";
  return `${EI}${SN}${TF}${JP}` as MBTIType;
}

export function getDiagnosisProgress(answeredCount: number, totalQuestions: number = 60): number {
  return Math.min(Math.round((answeredCount / totalQuestions) * 100), 100);
}

export function isDiagnosisComplete(answeredCount: number, totalQuestions: number = 60): boolean {
  return answeredCount >= totalQuestions;
}

export function getAxisPercentage(score: MBTIScore) {
  const total = (a: number, b: number) => (a + b === 0 ? 50 : Math.round((a / (a + b)) * 100));
  return {
    E: total(score.E, score.I),
    I: total(score.I, score.E),
    S: total(score.S, score.N),
    N: total(score.N, score.S),
    T: total(score.T, score.F),
    F: total(score.F, score.T),
    J: total(score.J, score.P),
    P: total(score.P, score.J),
  };
}

export const MBTI_DESCRIPTIONS: Record<MBTIType, { name: string; description: string }> = {
  INTJ: { name: "建築家", description: "戦略的で独立した思考の持ち主。長期ビジョンで物事を捉えます。" },
  INTP: { name: "論理学者", description: "知的好奇心が旺盛で、理論と分析を愛する探求者です。" },
  ENTJ: { name: "指揮官", description: "生まれながらのリーダー。効率と目標達成に情熱を注ぎます。" },
  ENTP: { name: "討論者", description: "アイデアの泉。既存の枠を壊し新しい可能性を見出します。" },
  INFJ: { name: "提唱者", description: "深い洞察力を持ち、人の内面を理解する理想主義者です。" },
  INFP: { name: "仲介者", description: "豊かな感受性と強い価値観を持つ、創造的な夢見人です。" },
  ENFJ: { name: "主人公", description: "カリスマ的で人を惹きつけ、他者の成長を心から望むリーダーです。" },
  ENFP: { name: "広報運動家", description: "情熱的で創造力豊か。可能性を見出し人を元気づけます。" },
  ISTJ: { name: "管理者", description: "責任感が強く、正確で信頼される堅実な実務家です。" },
  ISFJ: { name: "擁護者", description: "思いやり深く、献身的で人を支えることに喜びを感じます。" },
  ESTJ: { name: "幹部", description: "組織力と責任感に優れ、ルールと秩序を重んじるリーダーです。" },
  ESFJ: { name: "領事官", description: "社交的で面倒見が良く、調和を大切にするムードメーカーです。" },
  ISTP: { name: "巨匠", description: "冷静で実践的。手を動かして問題を解決する職人気質です。" },
  ISFP: { name: "冒険家", description: "感性豊かで今を大切にする、自由を愛するアーティストです。" },
  ESTP: { name: "起業家", description: "行動力と適応力の塊。リスクを恐れず結果を出します。" },
  ESFP: { name: "エンターテイナー", description: "明るく社交的で、周囲を楽しませることが得意な人気者です。" },
};
