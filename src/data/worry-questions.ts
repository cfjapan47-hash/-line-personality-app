import { WorryQuestion } from "@/types/question";

export const worryQuestions: WorryQuestion[] = [
  // 😤 仕事・職場ストレス
  { questionId: "WORRY_WORK_001", phase: "worry", category: "work_stress", depth: 1,
    text: "仕事のことを考えると、最近どんな気持ちになることが多いですか？",
    options: [
      { label: "A", text: "やる気が出ない・しんどい" },
      { label: "B", text: "焦りや不安を感じる" },
      { label: "C", text: "怒りやもやもやが溜まっている" },
    ] },
  { questionId: "WORRY_WORK_002", phase: "worry", category: "work_stress", depth: 2,
    text: "仕事の悩みの根っこに近いのはどれですか？",
    options: [
      { label: "A", text: "上司・同僚との人間関係" },
      { label: "B", text: "仕事量・労働環境" },
      { label: "C", text: "将来・キャリアへの不安" },
    ] },
  { questionId: "WORRY_WORK_006", phase: "worry", category: "work_stress", depth: 4,
    text: "もし信頼できる専門家に相談できるとしたら、どんな人が理想ですか？",
    options: [
      { label: "A", text: "キャリアの方向性を一緒に考えてくれる人" },
      { label: "B", text: "法的・制度的な観点からアドバイスをくれる人" },
      { label: "C", text: "同じ経験を持つ人の話を聞きたい" },
    ], referralTrigger: true },

  // 😞 メンタル・心の悩み
  { questionId: "WORRY_MENTAL_001", phase: "worry", category: "mental_health", depth: 1,
    text: "最近の心の状態はどれに近いですか？",
    options: [
      { label: "A", text: "気力がわかない・何もしたくない" },
      { label: "B", text: "不安や心配が頭から離れない" },
      { label: "C", text: "イライラや怒りを感じやすい" },
    ] },
  { questionId: "WORRY_MENTAL_002", phase: "worry", category: "mental_health", depth: 2,
    text: "その状態はどのくらい続いていますか？",
    options: [
      { label: "A", text: "最近急に（1〜2週間以内）" },
      { label: "B", text: "しばらく前から（1〜3ヶ月）" },
      { label: "C", text: "もうずっと前から（半年以上）" },
    ] },
  { questionId: "WORRY_MENTAL_006", phase: "worry", category: "mental_health", depth: 4,
    text: "もし話を聞いてもらうなら、どんな形が理想ですか？",
    options: [
      { label: "A", text: "専門家（カウンセラー・心理士）に相談したい" },
      { label: "B", text: "同じ経験をした人の話を聞きたい" },
      { label: "C", text: "まずオンラインで気軽に話したい" },
    ], referralTrigger: true },

  // 💸 お金・生活の悩み
  { questionId: "WORRY_MONEY_001", phase: "worry", category: "financial", depth: 1,
    text: "お金に関して、今最もプレッシャーを感じていることはどれですか？",
    options: [
      { label: "A", text: "毎月の収支・生活費が苦しい" },
      { label: "B", text: "将来の貯蓄・老後が不安" },
      { label: "C", text: "借金・ローン・債務の問題" },
    ] },
  { questionId: "WORRY_MONEY_006", phase: "worry", category: "financial", depth: 4,
    text: "もし専門家に相談できるとしたら、まず話したいことはどれですか？",
    options: [
      { label: "A", text: "今の家計・資産状況を整理したい" },
      { label: "B", text: "借金・ローン問題の解決策を知りたい" },
      { label: "C", text: "将来に向けた資産形成の計画を立てたい" },
    ], referralTrigger: true },

  // 👥 人間関係・家族の悩み
  { questionId: "WORRY_RELATION_001", phase: "worry", category: "relationship", depth: 1,
    text: "人間関係の悩みで、今最も気になっているのはどれですか？",
    options: [
      { label: "A", text: "職場・仕事上の人間関係" },
      { label: "B", text: "家族・パートナーとの関係" },
      { label: "C", text: "友人・コミュニティとの関係" },
    ] },
  { questionId: "WORRY_RELATION_006", phase: "worry", category: "relationship", depth: 4,
    text: "もし信頼できる人に話を聞いてもらえるとしたら、どんなサポートが欲しいですか？",
    options: [
      { label: "A", text: "気持ちをただ聞いてもらいたい" },
      { label: "B", text: "具体的な解決策を一緒に考えたい" },
      { label: "C", text: "法的・制度的な観点からのアドバイスが欲しい" },
    ], referralTrigger: true },

  // 🏥 健康・身体の悩み
  { questionId: "WORRY_HEALTH_001", phase: "worry", category: "health", depth: 1,
    text: "体や健康で、今最も気になっていることはどれですか？",
    options: [
      { label: "A", text: "慢性的な疲れ・体の不調" },
      { label: "B", text: "睡眠の問題（眠れない・起きられない）" },
      { label: "C", text: "体重・体型・生活習慣の乱れ" },
    ] },
  { questionId: "WORRY_HEALTH_006", phase: "worry", category: "health", depth: 4,
    text: "もし専門家につながれるとしたら、どんなサポートが欲しいですか？",
    options: [
      { label: "A", text: "医師や専門家に診てもらいたい" },
      { label: "B", text: "生活習慣の改善を一緒に考えてほしい" },
      { label: "C", text: "同じ悩みを持つ人の経験を聞きたい" },
    ], referralTrigger: true },
];
