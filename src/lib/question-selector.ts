import { diagnosisQuestions } from "@/data/diagnosis-questions";
import { communicationQuestions } from "@/data/communication-questions";
import { interestQuestions } from "@/data/interest-questions";
import { worryQuestions } from "@/data/worry-questions";
import { Question, MBTIType } from "@/types/question";

export function selectDiagnosisQuestion(answeredIds: string[]): Question | null {
  const unanswered = diagnosisQuestions.filter(q => !answeredIds.includes(q.questionId));
  if (unanswered.length === 0) return null;
  // ランダムに1問
  return unanswered[Math.floor(Math.random() * unanswered.length)];
}

export function selectCommunicationQuestion(
  mbtiType: MBTIType,
  answeredIds: string[]
): Question | null {
  const matching = communicationQuestions.filter(
    q => q.targetTypes.includes(mbtiType) && !answeredIds.includes(q.questionId)
  );
  if (matching.length === 0) return null;
  return matching[Math.floor(Math.random() * matching.length)];
}

export function selectInterestQuestion(answeredIds: string[]): Question | null {
  const unanswered = interestQuestions.filter(q => !answeredIds.includes(q.questionId));
  if (unanswered.length === 0) return null;
  return unanswered[Math.floor(Math.random() * unanswered.length)];
}

export function selectWorryQuestion(answeredIds: string[]): Question | null {
  const unanswered = worryQuestions.filter(q => !answeredIds.includes(q.questionId));
  if (unanswered.length === 0) return null;
  // depth順に出題
  unanswered.sort((a, b) => a.depth - b.depth);
  return unanswered[0];
}

export function selectTodayQuestion(
  mbtiType: MBTIType | null,
  answeredIds: string[],
  diagnosisComplete: boolean
): Question | null {
  // Phase 1: 診断が未完了なら診断問題
  if (!diagnosisComplete) {
    return selectDiagnosisQuestion(answeredIds);
  }

  // Phase 2: 診断完了後はコミュニケーション問題
  if (mbtiType) {
    return selectCommunicationQuestion(mbtiType, answeredIds);
  }

  return null;
}
