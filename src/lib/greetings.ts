// フリートーク風の挨拶コメント
const greetings: string[] = [
  "こんにちは！今日も一緒に自分を知る旅をしましょう",
  "お疲れさまです！ちょっとだけ自分のこと、考えてみませんか？",
  "今日もありがとう！次の質問いってみよう",
  "いい調子ですね！どんどんあなたのことがわかってきました",
  "さて、次はどんな一面が見えるかな？",
  "リラックスして答えてくださいね。正解はありませんから",
  "あなたの答え、いつも興味深いです！次もお願いします",
  "ふむふむ、なるほど。では次の質問です！",
  "楽しんでますか？もう少し聞かせてくださいね",
  "素敵な回答でした！続けていきましょう",
  "あなたのこと、もっと知りたいな。次いきますね！",
  "いいペースですね！無理せず自分のペースで大丈夫ですよ",
  "ここまでの回答を見ていると、面白い傾向がありますね",
  "ちょっとひと息。準備ができたら次の質問へ！",
  "順調です！あなたの個性が少しずつ見えてきましたよ",
];

const firstGreeting = "はじめまして！ココロのコンパスです。あなたのことを教えてくださいね。最初の質問です！";

const milestoneGreetings: Record<number, string> = {
  10: "10問達成！いい感じに進んでいますね",
  20: "もう20問！あなたの性格の輪郭が見えてきました",
  30: "折り返し地点です！後半も楽しんでいきましょう",
  40: "40問クリア！ゴールが近づいてきましたよ",
  50: "あと10問！最後まで一緒に頑張りましょう",
  55: "もうすぐ診断完了です！ラストスパート！",
};

const diagnosisCompleteGreeting = "性格診断が完了しました！ここからはあなたのタイプに合わせた質問をしていきますね";

export function getGreeting(answeredCount: number, justCompletedDiagnosis: boolean): string {
  if (answeredCount === 0) {
    return firstGreeting;
  }

  if (justCompletedDiagnosis) {
    return diagnosisCompleteGreeting;
  }

  if (milestoneGreetings[answeredCount]) {
    return milestoneGreetings[answeredCount];
  }

  return greetings[Math.floor(Math.random() * greetings.length)];
}
