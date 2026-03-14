import { CommunicationQuestion } from "@/types/question";

// コミュニケーション質問バンク（代表的な問題を収録）
// 16タイプ × 4テーマで構成
export const communicationQuestions: CommunicationQuestion[] = [
  // ═══ NT グループ ═══
  // INTJ/INTP 仕事
  { questionId: "COMM_IT_WORK_001", phase: "communication", targetTypes: ["INTJ", "INTP"], theme: "work",
    text: "今取り組んでいる目標で、最も手応えを感じている部分はどこですか？",
    options: [
      { label: "A", text: "戦略や全体設計の部分" },
      { label: "B", text: "着実に前進している実感" },
      { label: "C", text: "まだ手応えを感じられていない" },
    ] },
  { questionId: "COMM_IT_WORK_002", phase: "communication", targetTypes: ["INTJ", "INTP"], theme: "work",
    text: "仕事で「自分の能力を最大限使えている」と感じるのはどんなときですか？",
    options: [
      { label: "A", text: "複雑な問題を一人で深く考えるとき" },
      { label: "B", text: "新しいシステムや仕組みを設計するとき" },
      { label: "C", text: "自分のペースで成果を出せているとき" },
    ] },
  { questionId: "COMM_IT_WORK_003", phase: "communication", targetTypes: ["INTJ", "INTP"], theme: "work",
    text: "今の仕事で、一番「無駄だな」と感じていることは何ですか？",
    options: [
      { label: "A", text: "意味のない会議や報告" },
      { label: "B", text: "非効率なプロセスや慣習" },
      { label: "C", text: "特に感じていない" },
    ] },
  // ENTJ/ENTP 仕事
  { questionId: "COMM_ET_WORK_001", phase: "communication", targetTypes: ["ENTJ", "ENTP"], theme: "work",
    text: "チームや周囲を動かすうえで、今一番意識していることは何ですか？",
    options: [
      { label: "A", text: "ビジョンや方向性の共有" },
      { label: "B", text: "効率的な仕組みづくり" },
      { label: "C", text: "メンバーのモチベーション管理" },
    ] },
  { questionId: "COMM_ET_WORK_002", phase: "communication", targetTypes: ["ENTJ", "ENTP"], theme: "work",
    text: "今の仕事で、最も挑戦的だと感じていることは何ですか？",
    options: [
      { label: "A", text: "スピードと質の両立" },
      { label: "B", text: "多様な意見をまとめること" },
      { label: "C", text: "新しい可能性を切り拓くこと" },
    ] },
  // NT 人間関係
  { questionId: "COMM_NT_REL_001", phase: "communication", targetTypes: ["INTJ", "INTP", "ENTJ", "ENTP"], theme: "relationship",
    text: "人と深く関わりたいと感じるのは、どんなときですか？",
    options: [
      { label: "A", text: "知的な議論や深い対話ができるとき" },
      { label: "B", text: "相手が本音を話してくれるとき" },
      { label: "C", text: "あまりそう感じない" },
    ] },
  { questionId: "COMM_NT_REL_002", phase: "communication", targetTypes: ["INTJ", "INTP", "ENTJ", "ENTP"], theme: "relationship",
    text: "人間関係で「疲れるな」と感じるのはどんな状況ですか？",
    options: [
      { label: "A", text: "表面的な会話が続くとき" },
      { label: "B", text: "感情的な対立が起きるとき" },
      { label: "C", text: "自分のペースを乱されるとき" },
    ] },
  // NT メンタル
  { questionId: "COMM_NT_MNT_001", phase: "communication", targetTypes: ["INTJ", "INTP", "ENTJ", "ENTP"], theme: "mental",
    text: "ストレスを感じたとき、最初にとる行動はどれですか？",
    options: [
      { label: "A", text: "問題の原因を論理的に整理する" },
      { label: "B", text: "一人の時間をつくって考える" },
      { label: "C", text: "気分転換に全く別のことをする" },
    ] },
  { questionId: "COMM_NT_MNT_002", phase: "communication", targetTypes: ["INTJ", "INTP", "ENTJ", "ENTP"], theme: "mental",
    text: "最近、自分をしっかり休められていると感じますか？",
    options: [
      { label: "A", text: "十分に休めている" },
      { label: "B", text: "もう少し休みが必要" },
      { label: "C", text: "あまり休めていない" },
    ] },
  // NT 習慣
  { questionId: "COMM_NT_HAB_001", phase: "communication", targetTypes: ["INTJ", "INTP", "ENTJ", "ENTP"], theme: "habit",
    text: "毎日のルーティンに対して、どんなスタンスですか？",
    options: [
      { label: "A", text: "効率化のために決めたルールを守る" },
      { label: "B", text: "柔軟に変えながら最適化している" },
      { label: "C", text: "あまりルーティンを決めていない" },
    ] },

  // ═══ NF グループ ═══
  { questionId: "COMM_IF_WORK_001", phase: "communication", targetTypes: ["INFJ", "INFP"], theme: "work",
    text: "今の仕事に、自分らしい意味を感じられていますか？",
    options: [
      { label: "A", text: "はっきり感じている" },
      { label: "B", text: "少し感じている" },
      { label: "C", text: "あまり感じられていない" },
    ] },
  { questionId: "COMM_EF_WORK_001", phase: "communication", targetTypes: ["ENFJ", "ENFP"], theme: "work",
    text: "誰かの成長や変化に関わったとき、どんな気持ちになりますか？",
    options: [
      { label: "A", text: "自分のことのように嬉しい" },
      { label: "B", text: "大きな達成感がある" },
      { label: "C", text: "もっと力になれたかと考える" },
    ] },
  { questionId: "COMM_NF_REL_001", phase: "communication", targetTypes: ["INFJ", "INFP", "ENFJ", "ENFP"], theme: "relationship",
    text: "大切な人との関係で、最近気になっていることはありますか？",
    options: [
      { label: "A", text: "もっと深く分かり合いたい" },
      { label: "B", text: "距離感がちょうどよくない" },
      { label: "C", text: "特にない" },
    ] },
  { questionId: "COMM_NF_MNT_001", phase: "communication", targetTypes: ["INFJ", "INFP", "ENFJ", "ENFP"], theme: "mental",
    text: "気持ちが落ちているとき、自分を回復させる方法はどれですか？",
    options: [
      { label: "A", text: "好きな音楽や映画に浸る" },
      { label: "B", text: "信頼できる人に話す" },
      { label: "C", text: "自然の中や静かな場所にいく" },
    ] },
  { questionId: "COMM_NF_HAB_001", phase: "communication", targetTypes: ["INFJ", "INFP", "ENFJ", "ENFP"], theme: "habit",
    text: "自分の行動の原動力になっているのは、どれが一番近いですか？",
    options: [
      { label: "A", text: "誰かの役に立ちたい気持ち" },
      { label: "B", text: "自分らしくありたい気持ち" },
      { label: "C", text: "理想の未来に近づきたい気持ち" },
    ] },

  // ═══ SJ グループ ═══
  { questionId: "COMM_SJ_WORK_001", phase: "communication", targetTypes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"], theme: "work",
    text: "今月の仕事で、一番うまくできたと思うことは何ですか？",
    options: [
      { label: "A", text: "計画通りに着実に進められた" },
      { label: "B", text: "品質や丁寧さを保てた" },
      { label: "C", text: "周りとうまく協力できた" },
    ] },
  { questionId: "COMM_SJ_REL_001", phase: "communication", targetTypes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"], theme: "relationship",
    text: "長く続いている人間関係で、大切にしていることはどれですか？",
    options: [
      { label: "A", text: "約束や信頼を守ること" },
      { label: "B", text: "相手の状況を気にかけること" },
      { label: "C", text: "無理なく続けられる距離感" },
    ] },
  { questionId: "COMM_SJ_MNT_001", phase: "communication", targetTypes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"], theme: "mental",
    text: "疲れがたまっているとき、最も効果的な回復法はどれですか？",
    options: [
      { label: "A", text: "しっかり睡眠をとる" },
      { label: "B", text: "決まったルーティンをこなす" },
      { label: "C", text: "家族や親しい人と過ごす" },
    ] },
  { questionId: "COMM_SJ_HAB_001", phase: "communication", targetTypes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"], theme: "habit",
    text: "毎日続けていることで、一番自信があるものはどれですか？",
    options: [
      { label: "A", text: "健康管理（睡眠・食事・運動）" },
      { label: "B", text: "仕事や学習の習慣" },
      { label: "C", text: "人との定期的なコミュニケーション" },
    ] },

  // ═══ SP グループ ═══
  { questionId: "COMM_TP_WORK_001", phase: "communication", targetTypes: ["ISTP", "ESTP"], theme: "work",
    text: "仕事で一番テンションが上がる瞬間はどれですか？",
    options: [
      { label: "A", text: "問題を素早く解決できたとき" },
      { label: "B", text: "新しい挑戦に取り組むとき" },
      { label: "C", text: "すぐに結果が出たとき" },
    ] },
  { questionId: "COMM_FP_WORK_001", phase: "communication", targetTypes: ["ISFP", "ESFP"], theme: "work",
    text: "今の仕事で、自分らしさを出せている場面はどれですか？",
    options: [
      { label: "A", text: "アイデアや表現で貢献できるとき" },
      { label: "B", text: "現場で体を動かしているとき" },
      { label: "C", text: "人を楽しませたり喜ばせたりできたとき" },
    ] },
  { questionId: "COMM_SP_REL_001", phase: "communication", targetTypes: ["ISTP", "ISFP", "ESTP", "ESFP"], theme: "relationship",
    text: "友人や仲間と一緒にいるとき、一番楽しいのはどんな場面ですか？",
    options: [
      { label: "A", text: "一緒に何か体験するとき" },
      { label: "B", text: "本音でざっくばらんに話すとき" },
      { label: "C", text: "笑いが絶えないとき" },
    ] },
  { questionId: "COMM_SP_MNT_001", phase: "communication", targetTypes: ["ISTP", "ISFP", "ESTP", "ESFP"], theme: "mental",
    text: "気分が乗らないとき、一番効く対処法はどれですか？",
    options: [
      { label: "A", text: "体を動かす" },
      { label: "B", text: "好きなことに没頭する" },
      { label: "C", text: "気分転換に外に出る" },
    ] },
  { questionId: "COMM_SP_HAB_001", phase: "communication", targetTypes: ["ISTP", "ISFP", "ESTP", "ESFP"], theme: "habit",
    text: "行動するとき、どのパターンが一番自分らしいですか？",
    options: [
      { label: "A", text: "感じたらすぐ動く" },
      { label: "B", text: "ある程度考えてから動く" },
      { label: "C", text: "流れに乗って自然に動く" },
    ] },
];
