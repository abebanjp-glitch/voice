import { CheckSquare, Users, FileText, Sparkles, MessageCircle, Video, Monitor, Lightbulb, BookOpen } from "lucide-react";

export interface PainPoint {
  id: string;
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: "sns" | "video" | "web" | "ai" | "school";
  badge?: string;
  image: string;
}

export interface MetricItem {
  label: string;
  value: string;
  description: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: "SNS" | "Video";
  image: string;
  caption: string;
}

export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
}

export interface PriceTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  comment: string;
}

export const PAIN_POINTS: PainPoint[] = [
  { id: "pain-1", text: "SNSを始めたいけど、何からやればいいか分からない" },
  { id: "pain-2", text: "忙しくて、投稿を続ける時間がない・ネタが尽きる" },
  { id: "pain-3", text: "動画を作りたいけど、機材も編集スキルもない" },
  { id: "pain-4", text: "ホームページがない、または古くてスマホで見づらい" }
];

export const SERVICES: { primary: ServiceItem[]; secondary: ServiceItem[] } = {
  primary: [
    {
      title: "SNS運用代行",
      description: "アカウント作りから毎日の投稿・分析まで、まるごと代行。「続けられない」を、私たちが解決します。",
      iconName: "sns",
      badge: "人気No.1",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "動画編集",
      description: "ショート動画からYouTubeまで。お店・商品の魅力が転送される・伝わる動画を、手軽に高品質で制作します。",
      iconName: "video",
      image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Webサイト制作",
      description: "お店のホームページを、スマホで見やすく・今どきのデザインで。制作から公開後の更新サポートまで、まるごとお任せいただけます。",
      iconName: "web",
      image: "https://images.unsplash.com/photo-1547658719-da2b8116c1d0?auto=format&fit=crop&w=600&q=80"
    }
  ],
  secondary: [
    {
      title: "AI・DXコンサル",
      description: "「AIって何ができるの？」から、日々の業務のちょっとしたデジタル効率化まで丁寧に伴走します。",
      iconName: "ai",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "スクール運営",
      description: "「自分自身でも発信できるようになりたい」という方のために、分かりやすく学べる発信スクールを開講しています。",
      iconName: "school",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

export const CASE_STUDY = {
  title: "宮町商店街 店舗検索サイト",
  description: "176店舗を掲載する、スマホ最適化された商店街の店舗検索サイト。和モダンなデザイン、SEO・OGP対応、リアルタイム検索。企画・制作から、日々の店舗情報の更新運用まで一貫して担当しています。",
  image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80", // Elegant Japanese style street
  url: "https://abebanjp-glitch.github.io/miyamachi-shop-search/",
  quote: "地元の商店街の\"声\"を、一軒一軒、届く形にしました。"
};

export const METRICS: MetricItem[] = [
  { label: "動画制作本数", value: "300+", description: "ショート・PR動画多数" },
  { label: "総動画再生数", value: "250万+", description: "SNSでの認知獲得実績" },
  { label: "運用アカウント", value: "35+", description: "地域密着の店舗・企業様" }
];

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "sc-1",
    title: "商店街 カフェPR動画",
    category: "Video",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&h=711&q=80",
    caption: "温かみのある焙煎風景とシズル感を重視したショート動画。公開1週間で3万回再生。"
  },
  {
    id: "sc-2",
    title: "地元 和菓子店 Instagram",
    category: "SNS",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=711&q=80",
    caption: "季節の彩りと職人の手仕事を紹介。若年層の新規来店数が前月比150%を記録。"
  },
  {
    id: "sc-3",
    title: "建築会社 ルームツアー",
    category: "Video",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=711&q=80",
    caption: "こだわりを1分に凝縮したルームツアー動画。問い合わせ率が大幅に向上。"
  },
  {
    id: "sc-4",
    title: "洋菓子店 採用PRリール",
    category: "Video",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&h=711&q=80",
    caption: "働くスタッフの笑顔と舞台裏をドキュメンタリー風に演出。求人応募数が倍増。"
  },
  {
    id: "sc-5",
    title: "整骨院お役立ち投稿",
    category: "SNS",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=711&q=80",
    caption: "『家でできるストレッチ』を図解カルーセルで発信。保存数が過去最高を達成。"
  }
];

export const WHY_US: WhyUsItem[] = [
  {
    number: "01",
    title: "SNSも動画もWebも、まとめて任せられる。",
    description: "別々の会社に頼む手間や、内容のズレがありません。発信まわりのあらゆる施策を、一社で一貫してサポートします。"
  },
  {
    number: "02",
    title: "親身に、二人三脚で。",
    description: "難しい専門用語は使いません。デジタルに慣れていない経営者様にも寄り添い、あなたのお店に合わせていっしょに考えます。"
  },
  {
    number: "03",
    title: "地元だから、抜群の安心感。",
    description: "対面での打ち合わせや、スピーディな現場撮影にも対応。実際に地元・宮町商店街の店舗検索サイトを手がけた確かな実績と信頼があります。"
  }
];

export const SNS_PRICES: PriceTier[] = [
  {
    name: "ライトプラン",
    price: "30,000",
    features: [
      "1媒体（Instagram等）",
      "月4回のフィード投稿代行",
      "かんたん月次数値レポート",
      "基本的なプロフィール設計",
      "メール/LINEでの進捗連絡"
    ]
  },
  {
    name: "スタンダードプラン",
    price: "60,000",
    features: [
      "1〜2媒体（Instagram / TikTok等）",
      "月8回の投稿（フィード/リール/ストーリーズ）",
      "詳細な分析・改善アドバイス",
      "月1回のオンライン相談・作戦会議",
      "ハッシュタグ最適化・競合調査"
    ],
    recommended: true
  },
  {
    name: "しっかり運用プラン",
    price: "120,000",
    features: [
      "複数媒体（Instagram / TikTok / YouTube等）",
      "月16回の高頻度投稿代行",
      "月1回の撮影サポート（現地にて素材撮影）",
      "専任担当者による手厚いサポート",
      "DM・コメント対応アドバイス",
      "詳細月次レポート＆対面ミーティング"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "LINEまたはメールフォームから、まずはお気軽にお悩みをお聞かせください。どんなに小さなお悩みでも大歓迎です。"
  },
  {
    step: "02",
    title: "ヒアリング",
    description: "対面、またはZoomでお店のことや目標をお聞きします。現在感じている『分からないこと』を丁寧に整理します。"
  },
  {
    step: "03",
    title: "ご提案・お見積り",
    description: "ご予算やお店の稼働状況に合わせ、ご負担のない最適なプランをご提案します。費用と役割分担を明確にいたします。"
  },
  {
    step: "04",
    title: "制作 / 運用スタート",
    description: "デザイン・動画撮影・アカウント作成など、実際の業務を開始。確認を密に行いながら、丁寧に進めます。"
  },
  {
    step: "05",
    title: "継続サポート・改善",
    description: "Webサイトの更新や、SNSの反響分析をもとに次の手をいっしょに考えます。発信がしっかり実を結ぶまで伴走します。"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "山田 太郎",
    role: "代表取締役 / プロデューサー",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    comment: "「発信したいけれど、やり方がわからない」という地元の皆さまの想いに耳を傾け、一番伝わるカタチで表現します。"
  },
  {
    name: "佐藤 健二",
    role: "クリエイティブディレクター / 映像クリエイター",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    comment: "スマホ一つで心をつかむ、テンポが良く愛着のわく動画を作ります。撮影が苦手な方でも自然体になれるようにサポートします！"
  },
  {
    name: "高橋 美咲",
    role: "SNSマーケター / デザイナー",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80",
    comment: "毎日見たくなる、親しみやすくてわかりやすいデザインとSNS投稿が得意です。ファンを増やすお手伝いを全力でいたします。"
  }
];
