import { DiagnosisQuestion } from "@/types/question";

export const diagnosisQuestions: DiagnosisQuestion[] = [
  // ═══ E/I軸（外向 vs 内向）15問 ═══
  {
    questionId: "EI_001", phase: "diagnosis", axis: "EI",
    text: "週末の過ごし方として、どれが一番しっくりきますか？",
    options: [
      { label: "A", text: "友人や家族と賑やかに過ごしたい", score: { E: 2 } },
      { label: "B", text: "少人数でゆっくり話したい", score: { E: 1, I: 1 } },
      { label: "C", text: "一人で好きなことをして過ごしたい", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_002", phase: "diagnosis", axis: "EI",
    text: "初対面の人が多い場所にいると、どう感じますか？",
    options: [
      { label: "A", text: "テンションが上がって楽しい", score: { E: 2 } },
      { label: "B", text: "慣れれば楽しめる", score: { E: 1, I: 1 } },
      { label: "C", text: "気疲れしてしまう", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_003", phase: "diagnosis", axis: "EI",
    text: "悩みがあるとき、どうしますか？",
    options: [
      { label: "A", text: "誰かに話して整理したい", score: { E: 2 } },
      { label: "B", text: "場合によって使い分ける", score: { E: 1, I: 1 } },
      { label: "C", text: "一人でじっくり考えたい", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_004", phase: "diagnosis", axis: "EI",
    text: "エネルギーが充電されるのはどんなときですか？",
    options: [
      { label: "A", text: "人と会って話したあと", score: { E: 2 } },
      { label: "B", text: "状況による", score: { E: 1, I: 1 } },
      { label: "C", text: "一人の時間を過ごしたあと", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_005", phase: "diagnosis", axis: "EI",
    text: "パーティーや飲み会では、どんなポジションが多いですか？",
    options: [
      { label: "A", text: "場を盛り上げる中心にいる", score: { E: 2 } },
      { label: "B", text: "その場の流れに合わせる", score: { E: 1, I: 1 } },
      { label: "C", text: "少人数で静かに話している", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_006", phase: "diagnosis", axis: "EI",
    text: "考えをまとめるとき、どちらが得意ですか？",
    options: [
      { label: "A", text: "人に話しながら整理する", score: { E: 2 } },
      { label: "B", text: "どちらでもいける", score: { E: 1, I: 1 } },
      { label: "C", text: "書いたり一人で考えたりして整理する", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_007", phase: "diagnosis", axis: "EI",
    text: "電話とメール、どちらが好きですか？",
    options: [
      { label: "A", text: "電話の方が早くて好き", score: { E: 2 } },
      { label: "B", text: "内容によって使い分ける", score: { E: 1, I: 1 } },
      { label: "C", text: "メールやチャットの方が楽", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_008", phase: "diagnosis", axis: "EI",
    text: "友人の数について、どちらに近いですか？",
    options: [
      { label: "A", text: "広く浅く、たくさんの友人がいる", score: { E: 2 } },
      { label: "B", text: "程よい数の友人がいる", score: { E: 1, I: 1 } },
      { label: "C", text: "深い関係の少数の友人がいる", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_009", phase: "diagnosis", axis: "EI",
    text: "仕事で成果を出せるのはどんな環境ですか？",
    options: [
      { label: "A", text: "チームで活発に意見交換しながら", score: { E: 2 } },
      { label: "B", text: "状況に応じて切り替えられる環境", score: { E: 1, I: 1 } },
      { label: "C", text: "静かに集中できる環境", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_010", phase: "diagnosis", axis: "EI",
    text: "新しい環境に入ったとき、どう行動しますか？",
    options: [
      { label: "A", text: "すぐに周囲の人に話しかける", score: { E: 2 } },
      { label: "B", text: "様子を見ながら少しずつ関わる", score: { E: 1, I: 1 } },
      { label: "C", text: "まず観察して、自分から動くのは後", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_011", phase: "diagnosis", axis: "EI",
    text: "休憩時間の過ごし方はどれが近いですか？",
    options: [
      { label: "A", text: "同僚と雑談やランチに行く", score: { E: 2 } },
      { label: "B", text: "気分で変わる", score: { E: 1, I: 1 } },
      { label: "C", text: "一人でのんびりする", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_012", phase: "diagnosis", axis: "EI",
    text: "嬉しいことがあったとき、最初にどうしますか？",
    options: [
      { label: "A", text: "すぐ誰かに報告したくなる", score: { E: 2 } },
      { label: "B", text: "タイミングが合えば話す", score: { E: 1, I: 1 } },
      { label: "C", text: "まず自分の中で味わう", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_013", phase: "diagnosis", axis: "EI",
    text: "長時間一人でいると、どう感じますか？",
    options: [
      { label: "A", text: "寂しくなって誰かと会いたくなる", score: { E: 2 } },
      { label: "B", text: "ちょうどいい時間なら平気", score: { E: 1, I: 1 } },
      { label: "C", text: "むしろ快適で心地よい", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_014", phase: "diagnosis", axis: "EI",
    text: "プレゼンや発表について、どう感じますか？",
    options: [
      { label: "A", text: "得意で楽しめる", score: { E: 2 } },
      { label: "B", text: "準備すれば問題ない", score: { E: 1, I: 1 } },
      { label: "C", text: "できれば避けたい", score: { I: 2 } },
    ],
  },
  {
    questionId: "EI_015", phase: "diagnosis", axis: "EI",
    text: "旅行は誰と行きたいですか？",
    options: [
      { label: "A", text: "大人数でワイワイ行きたい", score: { E: 2 } },
      { label: "B", text: "気の合う2〜3人で", score: { E: 1, I: 1 } },
      { label: "C", text: "一人旅が好き", score: { I: 2 } },
    ],
  },

  // ═══ S/N軸（感覚 vs 直感）15問 ═══
  {
    questionId: "SN_001", phase: "diagnosis", axis: "SN",
    text: "新しいことを始めるとき、どのタイプに近いですか？",
    options: [
      { label: "A", text: "手順を確認してから着実に進める", score: { S: 2 } },
      { label: "B", text: "ある程度決めたらまず動いてみる", score: { S: 1, N: 1 } },
      { label: "C", text: "可能性を広げながら直感で進める", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_002", phase: "diagnosis", axis: "SN",
    text: "旅行の計画を立てるとき、どうしますか？",
    options: [
      { label: "A", text: "細かくスケジュールを決めたい", score: { S: 2 } },
      { label: "B", text: "大まかだけ決めて現地で考える", score: { S: 1, N: 1 } },
      { label: "C", text: "ノープランで気の向くまま動きたい", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_003", phase: "diagnosis", axis: "SN",
    text: "会話のなかで興味が湧くのはどちらですか？",
    options: [
      { label: "A", text: "実際に起きたことや具体的な話", score: { S: 2 } },
      { label: "B", text: "どちらも同じくらい面白い", score: { S: 1, N: 1 } },
      { label: "C", text: "将来の可能性やアイデアの話", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_004", phase: "diagnosis", axis: "SN",
    text: "問題を解決するとき、どうアプローチしますか？",
    options: [
      { label: "A", text: "過去の経験や実績を参考にする", score: { S: 2 } },
      { label: "B", text: "両方を組み合わせる", score: { S: 1, N: 1 } },
      { label: "C", text: "全く新しい方法を考えてみる", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_005", phase: "diagnosis", axis: "SN",
    text: "説明を受けるとき、どちらがわかりやすいですか？",
    options: [
      { label: "A", text: "具体例やデータで説明されるとき", score: { S: 2 } },
      { label: "B", text: "どちらでも理解できる", score: { S: 1, N: 1 } },
      { label: "C", text: "概念や全体像から説明されるとき", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_006", phase: "diagnosis", axis: "SN",
    text: "仕事で褒められて嬉しいのはどちらですか？",
    options: [
      { label: "A", text: "正確で丁寧な仕事ぶり", score: { S: 2 } },
      { label: "B", text: "どちらも嬉しい", score: { S: 1, N: 1 } },
      { label: "C", text: "独創的なアイデアや発想力", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_007", phase: "diagnosis", axis: "SN",
    text: "本や映画を楽しむとき、どちらが好きですか？",
    options: [
      { label: "A", text: "リアルで実用的な内容", score: { S: 2 } },
      { label: "B", text: "ジャンルにこだわらない", score: { S: 1, N: 1 } },
      { label: "C", text: "想像力をかき立てるファンタジーやSF", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_008", phase: "diagnosis", axis: "SN",
    text: "「今この瞬間」と「将来の夢」、どちらを大切にしますか？",
    options: [
      { label: "A", text: "今この瞬間を大切にする", score: { S: 2 } },
      { label: "B", text: "バランスを取りたい", score: { S: 1, N: 1 } },
      { label: "C", text: "将来の可能性に夢を見る", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_009", phase: "diagnosis", axis: "SN",
    text: "作業をするとき、どちらが得意ですか？",
    options: [
      { label: "A", text: "決まった手順通りに正確にこなす", score: { S: 2 } },
      { label: "B", text: "どちらもそれなりにできる", score: { S: 1, N: 1 } },
      { label: "C", text: "自分なりにアレンジして進める", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_010", phase: "diagnosis", axis: "SN",
    text: "買い物をするとき、何を重視しますか？",
    options: [
      { label: "A", text: "実用性とコスパ", score: { S: 2 } },
      { label: "B", text: "バランスよく判断する", score: { S: 1, N: 1 } },
      { label: "C", text: "デザインや世界観", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_011", phase: "diagnosis", axis: "SN",
    text: "変化に対してどう感じますか？",
    options: [
      { label: "A", text: "安定している方が安心する", score: { S: 2 } },
      { label: "B", text: "程よい変化があればいい", score: { S: 1, N: 1 } },
      { label: "C", text: "変化がある方がワクワクする", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_012", phase: "diagnosis", axis: "SN",
    text: "情報を集めるとき、どう進めますか？",
    options: [
      { label: "A", text: "確実なデータや事実を集める", score: { S: 2 } },
      { label: "B", text: "幅広く情報を見る", score: { S: 1, N: 1 } },
      { label: "C", text: "パターンや傾向を見つけようとする", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_013", phase: "diagnosis", axis: "SN",
    text: "料理をするとき、どうしますか？",
    options: [
      { label: "A", text: "レシピ通りに正確に作る", score: { S: 2 } },
      { label: "B", text: "レシピを参考にしつつ調整する", score: { S: 1, N: 1 } },
      { label: "C", text: "感覚でアレンジして作る", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_014", phase: "diagnosis", axis: "SN",
    text: "仕事の指示を受けるとき、どちらが好きですか？",
    options: [
      { label: "A", text: "具体的で明確な指示", score: { S: 2 } },
      { label: "B", text: "内容による", score: { S: 1, N: 1 } },
      { label: "C", text: "方向性だけ示して自由にやらせてほしい", score: { N: 2 } },
    ],
  },
  {
    questionId: "SN_015", phase: "diagnosis", axis: "SN",
    text: "成功する人に共通していることは何だと思いますか？",
    options: [
      { label: "A", text: "地道な努力と実行力", score: { S: 2 } },
      { label: "B", text: "両方必要だと思う", score: { S: 1, N: 1 } },
      { label: "C", text: "ビジョンと創造力", score: { N: 2 } },
    ],
  },

  // ═══ T/F軸（思考 vs 感情）15問 ═══
  {
    questionId: "TF_001", phase: "diagnosis", axis: "TF",
    text: "友人から相談を受けたとき、まず何をしますか？",
    options: [
      { label: "A", text: "解決策や改善案を一緒に考える", score: { T: 2 } },
      { label: "B", text: "状況を聞きながら一緒に考える", score: { T: 1, F: 1 } },
      { label: "C", text: "まず気持ちに寄り添って聞く", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_002", phase: "diagnosis", axis: "TF",
    text: "チームで意見が対立したとき、どう動きますか？",
    options: [
      { label: "A", text: "データや論理で正しい方を選ぶ", score: { T: 2 } },
      { label: "B", text: "論理と関係性のバランスをとる", score: { T: 1, F: 1 } },
      { label: "C", text: "全員が納得できる着地点を探す", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_003", phase: "diagnosis", axis: "TF",
    text: "褒められたとき、どう感じますか？",
    options: [
      { label: "A", text: "成果が認められて達成感がある", score: { T: 2 } },
      { label: "B", text: "どちらもうれしい", score: { T: 1, F: 1 } },
      { label: "C", text: "相手との関係が深まった気がする", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_004", phase: "diagnosis", axis: "TF",
    text: "重要な決断をするとき、最も重視するのは？",
    options: [
      { label: "A", text: "論理的に最善の選択肢", score: { T: 2 } },
      { label: "B", text: "総合的に判断する", score: { T: 1, F: 1 } },
      { label: "C", text: "自分や周囲の気持ち", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_005", phase: "diagnosis", axis: "TF",
    text: "批判やフィードバックを受けたとき、どう感じますか？",
    options: [
      { label: "A", text: "改善のチャンスとして分析する", score: { T: 2 } },
      { label: "B", text: "内容によって受け止め方が変わる", score: { T: 1, F: 1 } },
      { label: "C", text: "まず感情的に受け止めてしまう", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_006", phase: "diagnosis", axis: "TF",
    text: "正義と思いやり、どちらを優先しますか？",
    options: [
      { label: "A", text: "正しいことを伝えるべき", score: { T: 2 } },
      { label: "B", text: "状況による", score: { T: 1, F: 1 } },
      { label: "C", text: "相手の気持ちを優先する", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_007", phase: "diagnosis", axis: "TF",
    text: "映画やドラマを見るとき、何に注目しますか？",
    options: [
      { label: "A", text: "ストーリーの論理性や伏線", score: { T: 2 } },
      { label: "B", text: "全体のバランス", score: { T: 1, F: 1 } },
      { label: "C", text: "登場人物の感情や人間関係", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_008", phase: "diagnosis", axis: "TF",
    text: "誰かに何かを伝えるとき、何を意識しますか？",
    options: [
      { label: "A", text: "正確さとわかりやすさ", score: { T: 2 } },
      { label: "B", text: "両方気にする", score: { T: 1, F: 1 } },
      { label: "C", text: "相手がどう受け取るか", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_009", phase: "diagnosis", axis: "TF",
    text: "チームの中での自分の役割はどれが近いですか？",
    options: [
      { label: "A", text: "分析や戦略を考える役", score: { T: 2 } },
      { label: "B", text: "場面に応じて変わる", score: { T: 1, F: 1 } },
      { label: "C", text: "チームの雰囲気を良くする役", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_010", phase: "diagnosis", axis: "TF",
    text: "ルール違反を見つけたとき、どうしますか？",
    options: [
      { label: "A", text: "指摘して正すべき", score: { T: 2 } },
      { label: "B", text: "状況を見て判断する", score: { T: 1, F: 1 } },
      { label: "C", text: "相手の事情も考えて対応する", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_011", phase: "diagnosis", axis: "TF",
    text: "リーダーに求めるものはどちらですか？",
    options: [
      { label: "A", text: "的確な判断力と公平さ", score: { T: 2 } },
      { label: "B", text: "両方バランスよく", score: { T: 1, F: 1 } },
      { label: "C", text: "メンバーへの気配りと共感力", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_012", phase: "diagnosis", axis: "TF",
    text: "議論するとき、どちらが得意ですか？",
    options: [
      { label: "A", text: "論理的に主張を組み立てる", score: { T: 2 } },
      { label: "B", text: "どちらもできる", score: { T: 1, F: 1 } },
      { label: "C", text: "相手の立場を理解しながら話す", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_013", phase: "diagnosis", axis: "TF",
    text: "人を評価するとき、何を重視しますか？",
    options: [
      { label: "A", text: "能力や実績", score: { T: 2 } },
      { label: "B", text: "総合的に見る", score: { T: 1, F: 1 } },
      { label: "C", text: "人柄や誠実さ", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_014", phase: "diagnosis", axis: "TF",
    text: "感動するのはどんなときですか？",
    options: [
      { label: "A", text: "見事な戦略や計算で成功したとき", score: { T: 2 } },
      { label: "B", text: "どちらでも感動する", score: { T: 1, F: 1 } },
      { label: "C", text: "人の優しさや絆に触れたとき", score: { F: 2 } },
    ],
  },
  {
    questionId: "TF_015", phase: "diagnosis", axis: "TF",
    text: "「正しいけど相手を傷つける言葉」を言いますか？",
    options: [
      { label: "A", text: "正しいなら伝えるべき", score: { T: 2 } },
      { label: "B", text: "言い方を工夫して伝える", score: { T: 1, F: 1 } },
      { label: "C", text: "傷つけるなら言わない方がいい", score: { F: 2 } },
    ],
  },

  // ═══ J/P軸（判断 vs 知覚）15問 ═══
  {
    questionId: "JP_001", phase: "diagnosis", axis: "JP",
    text: "仕事や作業の進め方はどちらに近いですか？",
    options: [
      { label: "A", text: "締切より早めに終わらせたい", score: { J: 2 } },
      { label: "B", text: "余裕があれば早めに、なければ締切に合わせる", score: { J: 1, P: 1 } },
      { label: "C", text: "締切直前に集中してやる方が捗る", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_002", phase: "diagnosis", axis: "JP",
    text: "予定が急に変わったとき、どう感じますか？",
    options: [
      { label: "A", text: "少しストレスを感じる", score: { J: 2 } },
      { label: "B", text: "内容によって変わる", score: { J: 1, P: 1 } },
      { label: "C", text: "むしろ新鮮で楽しい", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_003", phase: "diagnosis", axis: "JP",
    text: "部屋や机の状態はどちらに近いですか？",
    options: [
      { label: "A", text: "整理整頓されていないと落ち着かない", score: { J: 2 } },
      { label: "B", text: "ある程度整っていればOK", score: { J: 1, P: 1 } },
      { label: "C", text: "多少散らかっていても気にならない", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_004", phase: "diagnosis", axis: "JP",
    text: "To-Doリストについて、どうしていますか？",
    options: [
      { label: "A", text: "必ず作って管理している", score: { J: 2 } },
      { label: "B", text: "作ることもあるが適当", score: { J: 1, P: 1 } },
      { label: "C", text: "あまり使わない・頭で管理する", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_005", phase: "diagnosis", axis: "JP",
    text: "決断するスピードはどうですか？",
    options: [
      { label: "A", text: "早く決めてすっきりしたい", score: { J: 2 } },
      { label: "B", text: "場面による", score: { J: 1, P: 1 } },
      { label: "C", text: "じっくり選択肢を残しておきたい", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_006", phase: "diagnosis", axis: "JP",
    text: "朝のルーティンは決まっていますか？",
    options: [
      { label: "A", text: "毎日ほぼ同じ流れで動く", score: { J: 2 } },
      { label: "B", text: "だいたい決まっているが柔軟", score: { J: 1, P: 1 } },
      { label: "C", text: "その日の気分で変わる", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_007", phase: "diagnosis", axis: "JP",
    text: "買い物に行くとき、どうしますか？",
    options: [
      { label: "A", text: "リストを作って効率的に回る", score: { J: 2 } },
      { label: "B", text: "大まかに考えて行く", score: { J: 1, P: 1 } },
      { label: "C", text: "行ってから考える", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_008", phase: "diagnosis", axis: "JP",
    text: "約束の時間について、どちらが多いですか？",
    options: [
      { label: "A", text: "いつも余裕を持って早く着く", score: { J: 2 } },
      { label: "B", text: "ほぼ時間通り", score: { J: 1, P: 1 } },
      { label: "C", text: "ギリギリになることが多い", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_009", phase: "diagnosis", axis: "JP",
    text: "複数のタスクがあるとき、どう進めますか？",
    options: [
      { label: "A", text: "優先順位をつけて一つずつ片付ける", score: { J: 2 } },
      { label: "B", text: "ある程度計画しつつ柔軟に対応", score: { J: 1, P: 1 } },
      { label: "C", text: "興味のあるものから手をつける", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_010", phase: "diagnosis", axis: "JP",
    text: "ルールや規則についてどう思いますか？",
    options: [
      { label: "A", text: "守ることが大事だと思う", score: { J: 2 } },
      { label: "B", text: "基本は守るが場合による", score: { J: 1, P: 1 } },
      { label: "C", text: "柔軟に解釈すればいいと思う", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_011", phase: "diagnosis", axis: "JP",
    text: "プロジェクトの途中で新しい情報が入ったとき、どうしますか？",
    options: [
      { label: "A", text: "計画に影響がないか確認して対応する", score: { J: 2 } },
      { label: "B", text: "状況に応じて判断する", score: { J: 1, P: 1 } },
      { label: "C", text: "新しい方向性として取り入れてみる", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_012", phase: "diagnosis", axis: "JP",
    text: "休日の予定について、どちらが多いですか？",
    options: [
      { label: "A", text: "前もって計画を立てる", score: { J: 2 } },
      { label: "B", text: "大まかに考えておく", score: { J: 1, P: 1 } },
      { label: "C", text: "当日に決める", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_013", phase: "diagnosis", axis: "JP",
    text: "仕事でゴールが曖昧なとき、どう感じますか？",
    options: [
      { label: "A", text: "不安なので明確にしたい", score: { J: 2 } },
      { label: "B", text: "ある程度は気にするが柔軟", score: { J: 1, P: 1 } },
      { label: "C", text: "探りながら進めるのは楽しい", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_014", phase: "diagnosis", axis: "JP",
    text: "夏休みの宿題（学生時代）はどうでしたか？",
    options: [
      { label: "A", text: "早めに計画的に終わらせた", score: { J: 2 } },
      { label: "B", text: "コツコツやった方だと思う", score: { J: 1, P: 1 } },
      { label: "C", text: "最終日に追い込んだ", score: { P: 2 } },
    ],
  },
  {
    questionId: "JP_015", phase: "diagnosis", axis: "JP",
    text: "完了していないタスクがあると、どう感じますか？",
    options: [
      { label: "A", text: "気になって落ち着かない", score: { J: 2 } },
      { label: "B", text: "少し気にはなるが許容できる", score: { J: 1, P: 1 } },
      { label: "C", text: "あまり気にならない", score: { P: 2 } },
    ],
  },
];
