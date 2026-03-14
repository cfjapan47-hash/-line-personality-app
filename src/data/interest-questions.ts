import { InterestQuestion } from "@/types/question";

export const interestQuestions: InterestQuestion[] = [
  // 💼 仕事・キャリア
  { questionId: "INT_WORK_001", phase: "interest", category: "work", depth: 1,
    text: "今の仕事やキャリアで、一番関心が高いテーマはどれですか？",
    options: [
      { label: "A", text: "収入・待遇を上げること" },
      { label: "B", text: "スキルや専門性を高めること" },
      { label: "C", text: "やりがいや意味を見つけること" },
    ] },
  { questionId: "INT_WORK_002", phase: "interest", category: "work", depth: 1,
    text: "キャリアを考えるとき、最も重視しているのはどれですか？",
    options: [
      { label: "A", text: "安定・安心" },
      { label: "B", text: "成長・挑戦" },
      { label: "C", text: "自由・裁量" },
    ] },
  { questionId: "INT_WORK_003", phase: "interest", category: "work", depth: 1,
    text: "今後チャレンジしてみたいことに近いのはどれですか？",
    options: [
      { label: "A", text: "副業・独立・起業" },
      { label: "B", text: "転職・異業種への挑戦" },
      { label: "C", text: "今の仕事をさらに深める" },
    ] },

  // 🎸 趣味・ライフスタイル
  { questionId: "INT_LIFE_001", phase: "interest", category: "lifestyle", depth: 1,
    text: "休日の過ごし方で、一番充実感を感じるのはどれですか？",
    options: [
      { label: "A", text: "体を動かしたり外に出かけたりする" },
      { label: "B", text: "創作・趣味・好きなことに没頭する" },
      { label: "C", text: "のんびり休んでリチャージする" },
    ] },
  { questionId: "INT_LIFE_002", phase: "interest", category: "lifestyle", depth: 1,
    text: "理想のライフスタイルに近いのはどれですか？",
    options: [
      { label: "A", text: "都市型・便利で刺激的な暮らし" },
      { label: "B", text: "自然に近いゆったりした暮らし" },
      { label: "C", text: "旅や移動を楽しむ暮らし" },
    ] },
  { questionId: "INT_LIFE_003", phase: "interest", category: "lifestyle", depth: 2,
    text: "日常の中で「豊かさ」を感じるのはどんなときですか？",
    options: [
      { label: "A", text: "好きなものや体験にお金を使えたとき" },
      { label: "B", text: "時間を自由に使えたとき" },
      { label: "C", text: "大切な人と過ごせたとき" },
    ] },

  // 📚 学習・自己成長
  { questionId: "INT_GROW_001", phase: "interest", category: "growth", depth: 1,
    text: "自己成長において、今最も関心があるのはどれですか？",
    options: [
      { label: "A", text: "仕事に直結するスキルアップ" },
      { label: "B", text: "内面・マインドの成長" },
      { label: "C", text: "知識や教養を広げること" },
    ] },
  { questionId: "INT_GROW_002", phase: "interest", category: "growth", depth: 1,
    text: "学びのスタイルはどれに近いですか？",
    options: [
      { label: "A", text: "本・動画・講座でインプットする" },
      { label: "B", text: "実際に試してアウトプットしながら学ぶ" },
      { label: "C", text: "人から直接教わる・対話しながら学ぶ" },
    ] },
  { questionId: "INT_GROW_003", phase: "interest", category: "growth", depth: 2,
    text: "コーチングや自己分析に対して、どんな期待がありますか？",
    options: [
      { label: "A", text: "自分の強みや才能を明確にしたい" },
      { label: "B", text: "思考や行動のクセに気づきたい" },
      { label: "C", text: "目標や方向性を整理したい" },
    ] },

  // 💰 お金・投資
  { questionId: "INT_MONEY_001", phase: "interest", category: "money", depth: 1,
    text: "お金に対して、今最も関心があるのはどれですか？",
    options: [
      { label: "A", text: "収入を増やすこと" },
      { label: "B", text: "資産を増やすこと（投資・運用）" },
      { label: "C", text: "支出を減らして余裕をつくること" },
    ] },
  { questionId: "INT_MONEY_002", phase: "interest", category: "money", depth: 1,
    text: "投資や資産運用に対して、今どんな段階ですか？",
    options: [
      { label: "A", text: "すでに実践している" },
      { label: "B", text: "興味はあるがまだ始めていない" },
      { label: "C", text: "あまり関心がない" },
    ] },
  { questionId: "INT_MONEY_003", phase: "interest", category: "money", depth: 2,
    text: "お金を使うとき、最も価値を感じるのはどれですか？",
    options: [
      { label: "A", text: "自己投資（学び・スキル・健康）" },
      { label: "B", text: "体験・思い出（旅・食・趣味）" },
      { label: "C", text: "安心・安全（保険・貯蓄）" },
    ] },

  // 💪 健康・身体
  { questionId: "INT_HLTH_001", phase: "interest", category: "health", depth: 1,
    text: "健康に関して、今最も関心があるのはどれですか？",
    options: [
      { label: "A", text: "体力・筋力・体型の維持・改善" },
      { label: "B", text: "疲れにくい体・エネルギー管理" },
      { label: "C", text: "メンタルと体の両方のバランス" },
    ] },
  { questionId: "INT_HLTH_002", phase: "interest", category: "health", depth: 1,
    text: "運動習慣について、今の状況はどれですか？",
    options: [
      { label: "A", text: "定期的に運動できている" },
      { label: "B", text: "たまにやる程度" },
      { label: "C", text: "ほとんどできていない" },
    ] },
  { questionId: "INT_HLTH_003", phase: "interest", category: "health", depth: 2,
    text: "体に関して、今最も改善したいと思っていることはどれですか？",
    options: [
      { label: "A", text: "睡眠の質・量" },
      { label: "B", text: "食事・栄養のバランス" },
      { label: "C", text: "運動・体を動かすこと" },
    ] },
];
