export type MBTIType =
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export type MBTIAxis = "EI" | "SN" | "TF" | "JP";
export type Theme = "work" | "relationship" | "mental" | "habit";
export type InterestCategory = "work" | "lifestyle" | "growth" | "money" | "health";
export type WorryCategory = "work_stress" | "mental_health" | "financial" | "relationship" | "health";
export type Phase = "diagnosis" | "communication" | "interest" | "worry";

export interface ScoreEffect {
  [key: string]: number;
}

export interface QuestionOption {
  label: string;
  text: string;
  score?: ScoreEffect;
}

export interface DiagnosisQuestion {
  questionId: string;
  phase: "diagnosis";
  axis: MBTIAxis;
  text: string;
  options: QuestionOption[];
}

export interface CommunicationQuestion {
  questionId: string;
  phase: "communication";
  targetTypes: MBTIType[];
  theme: Theme;
  text: string;
  options: QuestionOption[];
}

export interface InterestQuestion {
  questionId: string;
  phase: "interest";
  category: InterestCategory;
  depth: number;
  text: string;
  options: QuestionOption[];
}

export interface WorryQuestion {
  questionId: string;
  phase: "worry";
  category: WorryCategory;
  depth: number;
  text: string;
  options: QuestionOption[];
  referralTrigger?: boolean;
}

export type Question = DiagnosisQuestion | CommunicationQuestion | InterestQuestion | WorryQuestion;

export interface MBTIScore {
  E: number; I: number;
  S: number; N: number;
  T: number; F: number;
  J: number; P: number;
}

export interface ClientProfile {
  lineUserId: string;
  displayName: string;
  mbtiScore: MBTIScore;
  mbtiType: MBTIType | null;
  diagnosisProgress: number;
  answeredQuestionIds: string[];
  createdAt: Date;
}

export interface DailyAnswer {
  questionId: string;
  phase: Phase;
  answer: string;
  answeredAt: Date;
}
