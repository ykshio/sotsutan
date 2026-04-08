import type { DepartmentDefinition } from "@/types";

/**
 * 東京電機大学 工学部 電気電子工学科（2023年度入学）
 */
export const ej23: DepartmentDefinition = {
  id: "ej-23",
  departmentCode: "EJ",
  entranceYear: 2023,
  name: "電気電子工学科",
  faculty: "工学部",
  subjects: [
    // ========================================
    // 工学基礎科目
    // ========================================
    // 数学
    { id: "EJ23-001", name: "微分積分学および演習Ⅰ", credits: 4, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期／後期", jabeeCategory: "C", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-002", name: "線形代数学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期／後期", jabeeCategory: "C", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-003", name: "微分積分学および演習Ⅱ", credits: 4, category: "工学基礎科目", classification: "選択", subcategory1: "数学", year: "1", semester: "後期", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },
    { id: "EJ23-004", name: "線形代数学Ⅱ", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "数学", year: "1", semester: "後期", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },
    { id: "EJ23-005", name: "ベクトル解析", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "数学", year: "2", semester: "前期", jabeeCategory: "C" },
    { id: "EJ23-006", name: "微分方程式Ⅰ", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "数学", year: "2", semester: "前期", jabeeCategory: "C" },
    { id: "EJ23-007", name: "数値解析学", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "数学", year: "2", semester: "前期", jabeeCategory: "C" },
    { id: "EJ23-008", name: "フーリエ解析", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "数学", year: "2", semester: "後期", jabeeCategory: "C" },
    { id: "EJ23-009", name: "複素解析学Ⅰ", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "数学", year: "3", semester: "前期", jabeeCategory: "C" },

    // 自然科学技術
    { id: "EJ23-010", name: "基礎物理学", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期", jabeeCategory: "C", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-011", name: "物理基礎および物理実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", jabeeCategory: "C", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-012", name: "化学基礎および化学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", jabeeCategory: "C", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-013", name: "物理学概論および演習A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "物理学概論A〜C、科学技術概論A〜Dから1科目修得（択一必修）", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },
    { id: "EJ23-014", name: "物理学概論および演習B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修", jabeeCategory: "C", jabeeFields: { power: "required", system: "recommended", device: "required" } },
    { id: "EJ23-015", name: "物理学概論および演習C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },
    { id: "EJ23-016", name: "科学技術概論A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },
    { id: "EJ23-017", name: "科学技術概論B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },
    { id: "EJ23-018", name: "科学技術概論C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },
    { id: "EJ23-019", name: "科学技術概論D", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },

    // 情報
    { id: "EJ23-020", name: "情報リテラシー（数理・データサイエンス入門）", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", jabeeCategory: "C", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-021", name: "コンピュータプログラミングⅠ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "後期", jabeeCategory: "C", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-022", name: "コンピュータプログラミングⅡ", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "情報", year: "2", semester: "前期", jabeeCategory: "C", jabeeFields: { power: "recommended", system: "required", device: "recommended" } },

    // ワークショップ
    { id: "EJ23-023", name: "ワークショップ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "ワークショップ", year: "1", semester: "前期", jabeeCategory: "E1", jabeeFields: { power: "required", system: "required", device: "required" } },

    // ========================================
    // 専門教育科目 - D1: 専門科目
    // ========================================
    // 電気回路系
    { id: "EJ23-024", name: "回路基礎", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "電気回路系", year: "1", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-025", name: "回路理論および演習Ⅰ", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "電気回路系", year: "1", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-026", name: "電磁気学および演習Ⅰ", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "電気回路系", year: "2", semester: "前期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-027", name: "回路理論および演習Ⅱ", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "電気回路系", year: "2", semester: "前期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-028", name: "電気数学", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "電気回路系", year: "2", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },

    // 電磁気学系
    { id: "EJ23-029", name: "電磁気学および演習Ⅱ", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "電磁気学系", year: "2", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },

    // 専門科目（subcategory2なし）
    { id: "EJ23-030", name: "電気電子計測", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "2", semester: "前期", jabeeCategory: "D1", jabeeFields: { power: "recommended", system: "recommended", device: "recommended" } },

    // 電子回路系
    { id: "EJ23-031", name: "電子回路Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "電子回路系", year: "2", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },

    // 専門科目（subcategory2なし）
    { id: "EJ23-032", name: "ディジタル回路", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "2", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "recommended", system: "required", device: "required" } },
    { id: "EJ23-033", name: "電子回路Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "前期", jabeeCategory: "D1" },
    { id: "EJ23-034", name: "ディジタル信号処理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "前期", jabeeCategory: "D1" },

    // 振動制御系
    { id: "EJ23-035", name: "制御工学Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "振動制御系", year: "3", semester: "前期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "recommended" } },

    // 専門科目（subcategory2なし）
    { id: "EJ23-036", name: "ディジタルシステム", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "前期", jabeeCategory: "D1" },
    { id: "EJ23-037", name: "物性基礎", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "2", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "recommended", system: "recommended", device: "required" } },
    { id: "EJ23-038", name: "電気電子材料", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-039", name: "電気機器", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "前期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "recommended", device: "recommended" } },
    { id: "EJ23-040", name: "システム工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "前期", jabeeCategory: "D1" },
    { id: "EJ23-041", name: "制御工学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "後期", jabeeCategory: "D1", jabeeFields: { power: "recommended", system: "required", device: "recommended" } },
    { id: "EJ23-042", name: "高電圧工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-043", name: "半導体デバイス工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "前期", jabeeCategory: "D1", jabeeFields: { power: "recommended", system: "recommended", device: "required" } },
    { id: "EJ23-044", name: "パワーエレクトロニクス", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-045", name: "送配電工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-046", name: "高周波回路", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-047", name: "発電工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-048", name: "電気電子工学キャリアデザイン", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3", semester: "前期", jabeeCategory: "D1", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-049", name: "電気法規", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3,4", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-050", name: "電力系統工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "4", semester: "前期", jabeeCategory: "D1" },
    { id: "EJ23-051", name: "電機設計および電気製図", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "4", semester: "後期", jabeeCategory: "D1" },
    { id: "EJ23-052", name: "インターンシップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", year: "3,4", semester: "前期／後期", notes: "随時", jabeeCategory: "D1" },

    // ========================================
    // 専門教育科目 - D2: 実験科目
    // ========================================
    { id: "EJ23-053", name: "電気電子工学基礎実験Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "2", semester: "前期", jabeeCategory: "D2", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-054", name: "電気電子工学基礎実験Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "2", semester: "後期", jabeeCategory: "D2", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-055", name: "電気電子工学総合実験Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "3", semester: "前期", jabeeCategory: "D2", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-056", name: "電気電子工学総合実験Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "3", semester: "後期", jabeeCategory: "D2", jabeeFields: { power: "required", system: "required", device: "required" } },

    // ========================================
    // 専門教育科目 - E1: デザイン科目
    // ========================================
    { id: "EJ23-057", name: "エンジニアリング・デザイン概論", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "デザイン科目", year: "3", semester: "前期", jabeeCategory: "E1", jabeeFields: { power: "required", system: "required", device: "required" } },

    // ========================================
    // 専門教育科目 - E2: 研究科目
    // ========================================
    { id: "EJ23-058", name: "卒業研究", credits: 6, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "研究科目", year: "4", semester: "通年", jabeeCategory: "E2", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-059", name: "電気電子工学総合ゼミ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "研究科目", year: "3", semester: "後期", notes: "アセスメント科目", jabeeCategory: "E2", jabeeFields: { power: "required", system: "required", device: "required" } },

    // ========================================
    // 専門教育科目 - コミュニケーション科目
    // ========================================
    { id: "EJ23-060", name: "技術英語", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "コミュニケーション科目", year: "3", semester: "前期", jabeeCategory: "F", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-061", name: "Academic Presentation", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "コミュニケーション科目", year: "4", semester: "前期", jabeeCategory: "F", jabeeFields: { power: "required", system: "required", device: "required" } },
    { id: "EJ23-062", name: "電気電子工学リテラシー", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コミュニケーション科目", year: "1", semester: "後期", notes: "JABEE必修(★)", jabeeCategory: "F", jabeeFields: { power: "jabee-required", system: "jabee-required", device: "jabee-required" } },

    // ========================================
    // 共通教育科目 - 英語科目
    // ========================================
    { id: "EJ23-063", name: "総合英語Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "1", semester: "前期" },
    { id: "EJ23-064", name: "口語英語Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "1", semester: "前期" },
    { id: "EJ23-065", name: "総合英語Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "1", semester: "後期" },
    { id: "EJ23-066", name: "口語英語Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "1", semester: "後期" },
    { id: "EJ23-067", name: "総合英語Ⅲ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "2", semester: "前期" },
    { id: "EJ23-068", name: "総合英語Ⅳ(V)", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "2", semester: "後期" },
    { id: "EJ23-069", name: "英語演習A（Speaking）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "2", semester: "前期／後期" },
    { id: "EJ23-070", name: "英語演習B（Listening）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "2", semester: "前期／後期" },
    { id: "EJ23-071", name: "英語演習C（Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "2", semester: "前期／後期" },
    { id: "EJ23-072", name: "英語演習D（Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "2", semester: "前期／後期" },
    { id: "EJ23-073", name: "英語演習E（Global Communication）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "2", semester: "前期／後期" },
    { id: "EJ23-074", name: "英語演習F（検定英語）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "3", semester: "前期／後期" },
    { id: "EJ23-075", name: "英語演習G（Engineering Presentation）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "3", semester: "前期／後期" },
    { id: "EJ23-076", name: "英語演習H（Academic Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "4", semester: "前期" },
    { id: "EJ23-077", name: "英語演習I（Academic Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "4", semester: "後期" },
    { id: "EJ23-078", name: "国内英語短期研修", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "全", semester: "前期／後期" },
    { id: "EJ23-079", name: "海外英語短期研修", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", year: "全", semester: "前期／後期" },

    // ========================================
    // 共通教育科目 - 人間科学科目
    // ========================================
    // ジェネリックスキル・キャリア
    { id: "EJ23-080", name: "東京電機大学で学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期" },
    { id: "EJ23-081", name: "アカデミックスキルズ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "1", semester: "前期／後期" },
    { id: "EJ23-082", name: "情報と職業", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "全", semester: "前期／後期" },
    { id: "EJ23-083", name: "論理的思考法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "全", semester: "前期／後期" },

    // 人間・社会理解
    { id: "EJ23-084", name: "自己心理学セミナー", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-085", name: "企業と経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-086", name: "歴史理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-087", name: "実用法律入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-088", name: "哲学と倫理の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-089", name: "日本経済入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-090", name: "科学と技術の社会史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-091", name: "介護福祉論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-092", name: "異文化理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-093", name: "社会のなかの科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EJ23-094", name: "情報デザインと心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-095", name: "認知心理学とその工学的応用", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-096", name: "人間関係の心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-097", name: "企業と社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-098", name: "芸術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-099", name: "日本国憲法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-100", name: "情報とネットワークの経済社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },

    // 技術者教養
    { id: "EJ23-101", name: "技術者教養ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-102", name: "技術者倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", jabeeCategory: "B", jabeeFields: { power: "jabee-required", system: "jabee-required", device: "jabee-required" } },
    { id: "EJ23-103", name: "科学技術の失敗から学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-104", name: "先端技術と社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-105", name: "製造物責任法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-106", name: "科学技術と企業経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-107", name: "情報化社会とコミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-108", name: "情報倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-109", name: "情報化社会と知的財産権", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },

    // グローバル教養
    { id: "EJ23-110", name: "グローバリズムの政治・経済", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-111", name: "異文化間コミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-112", name: "グローバル時代の文化・歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-113", name: "国際政治の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-114", name: "持続可能性と科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-115", name: "グローバル社会の市民論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-116", name: "中国語・中国文化", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },

    // スポーツ・健康
    { id: "EJ23-117", name: "健康と生活", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期／後期" },
    { id: "EJ23-118", name: "ウェルネス＆スポーツ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期" },
    { id: "EJ23-119", name: "エクササイズ＆スポーツ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期" },
    { id: "EJ23-120", name: "コミュニケーションスポーツ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期" },
    { id: "EJ23-121", name: "アウトドアスポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期" },
    { id: "EJ23-122", name: "アウトドアスポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期" },
    { id: "EJ23-123", name: "アウトドアスポーツC", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期" },
    { id: "EJ23-124", name: "身体運動のしくみ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期" },

    // PBL特化科目
    { id: "EJ23-125", name: "人間科学プロジェクトⅠ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "2,3,4", semester: "通年" },
    { id: "EJ23-126", name: "人間科学プロジェクトⅡ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "3,4", semester: "通年" },

    // 教職教養
    { id: "EJ23-127", name: "教育心理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "1", semester: "後期" },
    { id: "EJ23-128", name: "教育学概論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "前期" },
    { id: "EJ23-129", name: "教育社会学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "後期" },
  ],
  promotionRequirements: [
    {
      label: "2年進級",
      targetYear: 2,
      items: [
        { label: "合計", requiredCredits: 24, filter: {} },
      ],
    },
    {
      label: "4年進級",
      targetYear: 4,
      items: [
        { label: "人間科学科目", requiredCredits: 10, filter: { subcategory1: "人間科学科目" } },
        { label: "英語科目", requiredCredits: 6, filter: { subcategory1: "英語科目" } },
        { label: "必修科目", requiredCredits: 19, countMode: "subjects" as const, filter: { classification: "必修" } },
        { label: "合計", requiredCredits: 104, filter: {} },
      ],
    },
    {
      label: "卒業",
      targetYear: 4,
      items: [
        { label: "人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },
        { label: "技術者教養科目", requiredCredits: 2, filter: { subcategory2: "技術者教養" } },
        { label: "グローバル教養科目", requiredCredits: 2, filter: { subcategory2: "グローバル教養" } },
        { label: "英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },
        { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" } },
        { label: "専門科目", requiredCredits: 31, filter: { subcategory1: "専門科目" } },
        { label: "実験科目", requiredCredits: 8, filter: { subcategory2: "実験科目" } },
        { label: "コミュニケーション科目（英語+コミュニケーション）", requiredCredits: 12, filter: {} },
        {
          label: "任意に選択し修得した科目",
          requiredCredits: 4,
          countMode: "overflow" as const,
          overflowSources: [
            { label: "人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },
            { label: "英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },
            { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" as const } },
            { label: "専門科目", requiredCredits: 31, filter: { subcategory1: "専門科目" } },
          ],
          filter: {},
        },
        { label: "合計", requiredCredits: 124, filter: {} },
      ],
    },
    {
      label: "JABEE専修プログラム修了",
      targetYear: 4,
      items: [
        { label: "(A) 人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },
        { label: "(A) グローバル教養", requiredCredits: 2, filter: { subcategory2: "グローバル教養" } },
        { label: "(B) 技術者倫理", requiredCredits: 2, filter: { subcategory2: "技術者教養" } },
        { label: "(C) 工学基礎科目", requiredCredits: 32, filter: { category: "工学基礎科目" } },
        { label: "(C1) 数学科目", requiredCredits: 6, filter: { subcategory1: "数学" } },
        { label: "(C2) 自然科学技術科目", requiredCredits: 6, filter: { subcategory1: "自然科学技術" } },
        { label: "(C3) コンピュータ科目", requiredCredits: 4, filter: { subcategory1: "情報" } },
        { label: "(D1) 専門科目", requiredCredits: 31, filter: { subcategory1: "専門科目" } },
        { label: "(D2) 実験科目", requiredCredits: 8, filter: { subcategory2: "実験科目" } },
        { label: "(E1) デザイン科目", requiredCredits: 4, filter: { subcategory2: "デザイン科目" } },
        { label: "(E2) 研究科目", requiredCredits: 8, filter: { subcategory2: "研究科目" } },
        { label: "(F) 英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },
        { label: "(F) コミュニケーション科目", requiredCredits: 4, filter: { subcategory2: "コミュニケーション科目" } },
        { label: "合計", requiredCredits: 124, filter: {} },
      ],
    },
  ],
  creditLimits: [{ label: "通常", maxCredits: 24 }],
};
