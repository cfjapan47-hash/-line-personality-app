"use client";

import { useState, useEffect, useCallback } from "react";
import QuestionCard from "@/components/QuestionCard";
import AnswerResult from "@/components/AnswerResult";
import ProfileSummary from "@/components/ProfileSummary";
import { Question, QuestionOption, MBTIScore, MBTIType } from "@/types/question";
import { createEmptyScore, addScore, calcMBTIType, isDiagnosisComplete } from "@/lib/mbti-calculator";
import { selectTodayQuestion } from "@/lib/question-selector";
import { diagnosisQuestions } from "@/data/diagnosis-questions";

type ViewState = "loading" | "question" | "answered" | "profile" | "already_answered";

export default function Home() {
  const [view, setView] = useState<ViewState>("loading");
  const [question, setQuestion] = useState<Question | null>(null);
  const [mbtiScore, setMbtiScore] = useState<MBTIScore>(createEmptyScore());
  const [mbtiType, setMbtiType] = useState<MBTIType | null>(null);
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);
  const [justCompleted, setJustCompleted] = useState(false);

  const totalQuestions = diagnosisQuestions.length;

  const loadState = useCallback(() => {
    const saved = localStorage.getItem("personality_state");
    let ids: string[] = [];
    let type: MBTIType | null = null;
    let score: MBTIScore = createEmptyScore();

    if (saved) {
      const state = JSON.parse(saved);
      score = state.mbtiScore || createEmptyScore();
      type = state.mbtiType || null;
      ids = state.answeredIds || [];
      setMbtiScore(score);
      setMbtiType(type);
      setAnsweredIds(ids);

      const today = new Date().toDateString();
      if (state.lastAnswerDate === today) {
        setView("already_answered");
        return;
      }
    }

    const complete = isDiagnosisComplete(ids.length, totalQuestions);
    const nextQ = selectTodayQuestion(type, ids, complete);
    if (nextQ) {
      setQuestion(nextQ);
      setView("question");
    } else {
      setView("already_answered");
    }
  }, [totalQuestions]);

  useEffect(() => {
    loadState();
  }, [loadState]);

  const handleAnswer = (option: QuestionOption) => {
    if (!question) return;

    const newIds = [...answeredIds, question.questionId];
    let newScore = mbtiScore;
    let newType = mbtiType;

    if (question.phase === "diagnosis" && option.score) {
      newScore = addScore(mbtiScore, option.score);
      setMbtiScore(newScore);

      if (isDiagnosisComplete(newIds.length, totalQuestions)) {
        newType = calcMBTIType(newScore);
        setMbtiType(newType);
        setJustCompleted(true);
      }
    }

    setAnsweredIds(newIds);

    localStorage.setItem(
      "personality_state",
      JSON.stringify({
        mbtiScore: newScore,
        mbtiType: newType,
        answeredIds: newIds,
        lastAnswerDate: new Date().toDateString(),
      })
    );

    setView("answered");
  };

  const handleClose = () => {
    if (justCompleted && mbtiType) {
      setView("profile");
      setJustCompleted(false);
    } else {
      setView("already_answered");
    }
  };

  const handleReset = () => {
    localStorage.removeItem("personality_state");
    setMbtiScore(createEmptyScore());
    setMbtiType(null);
    setAnsweredIds([]);
    setJustCompleted(false);
    loadState();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="mb-6 text-center">
        <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2 justify-center">
          <span className="w-8 h-8 bg-[#06C755] rounded-lg flex items-center justify-center text-white text-sm font-bold">
            P
          </span>
          パーソナリティ診断
        </h1>
      </div>

      {view === "loading" && (
        <div className="text-center text-gray-400">
          <div className="w-8 h-8 border-2 border-[#06C755] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          読み込み中...
        </div>
      )}

      {view === "question" && question && (
        <QuestionCard
          question={question}
          questionNumber={answeredIds.length + 1}
          onAnswer={handleAnswer}
        />
      )}

      {view === "answered" && (
        <AnswerResult
          answeredCount={answeredIds.length}
          totalQuestions={totalQuestions}
          mbtiScore={mbtiScore}
          onClose={handleClose}
        />
      )}

      {view === "profile" && mbtiType && (
        <ProfileSummary mbtiType={mbtiType} mbtiScore={mbtiScore} />
      )}

      {view === "already_answered" && (
        <div className="w-full max-w-md mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            今日の質問は完了です
          </h2>
          <p className="text-gray-500 mb-4">
            また明日の質問をお楽しみに!
          </p>
          {mbtiType && (
            <button
              onClick={() => setView("profile")}
              className="text-[#06C755] font-medium underline mb-4 block mx-auto"
            >
              性格プロフィールを見る
            </button>
          )}
          <p className="text-gray-300 text-sm mb-2">
            {answeredIds.length} / {totalQuestions} 問回答済み
          </p>
        </div>
      )}

      {process.env.NODE_ENV === "development" && (
        <button
          onClick={handleReset}
          className="mt-8 text-xs text-gray-300 hover:text-gray-500 transition-colors"
        >
          [DEV] リセット
        </button>
      )}
    </main>
  );
}
