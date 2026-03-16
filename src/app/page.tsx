"use client";

import { useState, useEffect, useCallback } from "react";
import QuestionCard from "@/components/QuestionCard";
import AnswerResult from "@/components/AnswerResult";
import ProfileSummary from "@/components/ProfileSummary";
import { Question, QuestionOption, MBTIScore, MBTIType } from "@/types/question";
import { createEmptyScore, addScore, calcMBTIType, isDiagnosisComplete } from "@/lib/mbti-calculator";
import { selectTodayQuestion } from "@/lib/question-selector";
import { getGreeting } from "@/lib/greetings";
import { diagnosisQuestions } from "@/data/diagnosis-questions";

type ViewState = "loading" | "greeting" | "question" | "answered" | "profile" | "complete";

export default function Home() {
  const [view, setView] = useState<ViewState>("loading");
  const [question, setQuestion] = useState<Question | null>(null);
  const [mbtiScore, setMbtiScore] = useState<MBTIScore>(createEmptyScore());
  const [mbtiType, setMbtiType] = useState<MBTIType | null>(null);
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);
  const [greeting, setGreeting] = useState("");
  const [justCompletedDiagnosis, setJustCompletedDiagnosis] = useState(false);

  const totalQuestions = diagnosisQuestions.length;

  const loadNextQuestion = useCallback((
    type: MBTIType | null,
    ids: string[],
    complete: boolean,
    diagnosisJustDone: boolean
  ) => {
    const nextQ = selectTodayQuestion(type, ids, complete);
    if (nextQ) {
      setQuestion(nextQ);
      setGreeting(getGreeting(ids.length, diagnosisJustDone));
      setView("greeting");
    } else {
      setView("complete");
    }
  }, []);

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
    }

    const complete = isDiagnosisComplete(ids.length, totalQuestions);
    loadNextQuestion(type, ids, complete, false);
  }, [totalQuestions, loadNextQuestion]);

  useEffect(() => {
    loadState();
  }, [loadState]);

  const handleAnswer = (option: QuestionOption) => {
    if (!question) return;

    const newIds = [...answeredIds, question.questionId];
    let newScore = mbtiScore;
    let newType = mbtiType;
    let diagnosisJustDone = false;

    if (question.phase === "diagnosis" && option.score) {
      newScore = addScore(mbtiScore, option.score);
      setMbtiScore(newScore);

      if (!mbtiType && isDiagnosisComplete(newIds.length, totalQuestions)) {
        newType = calcMBTIType(newScore);
        setMbtiType(newType);
        diagnosisJustDone = true;
      }
    }

    setAnsweredIds(newIds);
    setJustCompletedDiagnosis(diagnosisJustDone);

    localStorage.setItem(
      "personality_state",
      JSON.stringify({
        mbtiScore: newScore,
        mbtiType: newType,
        answeredIds: newIds,
      })
    );

    if (diagnosisJustDone) {
      setView("profile");
    } else {
      setView("answered");
    }
  };

  const handleNext = () => {
    const complete = isDiagnosisComplete(answeredIds.length, totalQuestions);
    loadNextQuestion(mbtiType, answeredIds, complete, justCompletedDiagnosis);
    setJustCompletedDiagnosis(false);
  };

  const handleReset = () => {
    localStorage.removeItem("personality_state");
    setMbtiScore(createEmptyScore());
    setMbtiType(null);
    setAnsweredIds([]);
    setJustCompletedDiagnosis(false);
    setGreeting(getGreeting(0, false));
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

      {view === "greeting" && question && (
        <div className="w-full max-w-md mx-auto">
          {/* フリートーク風挨拶 */}
          <div className="mb-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#06C755] rounded-full flex items-center justify-center text-white text-lg">
              C
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 max-w-[85%]">
              <p className="text-gray-700 text-sm leading-relaxed">{greeting}</p>
            </div>
          </div>

          {/* 少し間を置いて質問カードを表示 */}
          <div className="mt-4 animate-fade-in">
            <QuestionCard
              question={question}
              questionNumber={answeredIds.length + 1}
              onAnswer={handleAnswer}
            />
          </div>
        </div>
      )}

      {view === "answered" && (
        <AnswerResult
          answeredCount={answeredIds.length}
          totalQuestions={totalQuestions}
          mbtiScore={mbtiScore}
          onNext={handleNext}
        />
      )}

      {view === "profile" && mbtiType && (
        <div className="w-full max-w-md mx-auto">
          <ProfileSummary mbtiType={mbtiType} mbtiScore={mbtiScore} />
          <button
            onClick={handleNext}
            className="w-full mt-4 bg-[#06C755] hover:bg-[#04a847] text-white rounded-xl py-4 text-base font-medium transition-colors"
          >
            次の質問へ進む
          </button>
        </div>
      )}

      {view === "complete" && (
        <div className="w-full max-w-md mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#06C755]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            すべての質問が完了しました！
          </h2>
          <p className="text-gray-500 mb-4">
            ありがとうございます。あなたのプロフィールが完成しました。
          </p>
          {mbtiType && (
            <button
              onClick={() => setView("profile")}
              className="text-[#06C755] font-medium underline mb-4 block mx-auto"
            >
              性格プロフィールを見る
            </button>
          )}
          <p className="text-gray-300 text-sm">
            {answeredIds.length} 問回答済み
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
