import type { DepartmentDefinition } from "@/types";

/**
 * 東京電機大学 工学部 情報通信工学科（2022年度入学）
 */
export const ec22: DepartmentDefinition = {
  id: "ec-22",
  departmentCode: "EC",
  entranceYear: 2022,
  name: "情報通信工学科",
  faculty: "工学部",
  subjects: [
    // ========================================
    // 工学基礎科目
    // ========================================
    // 数学
    { id: "EC22-001", name: "微分積分学および演習Ⅰ", credits: 4, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期／後期", notes: "初回の履修は、前期開講のクラスを履修すること" },
    { id: "EC22-002", name: "線形代数学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期／後期", notes: "初回の履修は、前期開講のクラスを履修すること" },
    { id: "EC22-003", name: "線形代数学Ⅱ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "後期", teachingCode: "110代数" },
    // 自然科学技術
    { id: "EC22-004", name: "基礎物理学", credits: 2, category: "工学基礎科目", classification: "選択", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "後期は再履修クラスの開講" },
    { id: "EC22-005", name: "物理基礎および物理実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「化学基礎および化学実験」との隔週開講" },
    { id: "EC22-006", name: "化学基礎および化学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「物理基礎および物理実験」との隔週開講" },
    { id: "EC22-007", name: "物理学概論および演習A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修（該当科目から2単位（1科目）修得すること）" },
    { id: "EC22-008", name: "物理学概論および演習Ｂ", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修（該当科目から2単位（1科目）修得すること）" },
    { id: "EC22-009", name: "物理学概論および演習Ｃ", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修（該当科目から2単位（1科目）修得すること）" },
    { id: "EC22-010", name: "科学技術概論A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修（該当科目から2単位（1科目）修得すること）" },
    { id: "EC22-011", name: "科学技術概論B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修（該当科目から2単位（1科目）修得すること）" },
    { id: "EC22-012", name: "科学技術概論C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修（該当科目から2単位（1科目）修得すること）" },
    { id: "EC22-013", name: "科学技術概論D", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修（該当科目から2単位（1科目）修得すること）" },
    // ワークショップ
    { id: "EC22-014", name: "ワークショップ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "ワークショップ", year: "1", semester: "前期" },
    // 情報
    { id: "EC22-015", name: "情報リテラシー（数理・データサイエンス入門）", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },
    { id: "EC22-016", name: "コンピュータプログラミングⅠ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },

    // ========================================
    // 専門教育科目 - 専門科目
    // ========================================
    // 情報通信工学基礎
    { id: "EC22-017", name: "情報通信メディア基礎", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "情報通信工学基礎", year: "1", semester: "前期", teachingCode: "133情④", teachingRequired: true },
    { id: "EC22-018", name: "電気回路基礎および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "情報通信工学基礎", year: "1", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-019", name: "電子回路基礎", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "情報通信工学基礎", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-020", name: "複素数基礎", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "情報通信工学基礎", year: "1", semester: "前期" },

    // 回路信号基礎科目
    { id: "EC22-021", name: "信号理論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-022", name: "信号システム解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-023", name: "論理回路および論理設計", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-024", name: "電子回路応用", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-025", name: "ディジタル回路", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-026", name: "ディジタル信号処理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-027", name: "情報通信デバイス", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-028", name: "高周波の基礎", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-029", name: "計測制御工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "回路信号基礎科目", year: "3", semester: "前期", teachingCode: "160工業" },

    // 通信メディア科目
    { id: "EC22-030", name: "通信理論基礎", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-031", name: "情報処理・通信技術基礎", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-032", name: "通信システム", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-033", name: "メディアと信号処理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-034", name: "情報ネットワーク", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3", semester: "前期", teachingCode: "133情④" },
    { id: "EC22-035", name: "通信ネットワーク", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-036", name: "通信法規", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-037", name: "画像処理工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3", semester: "後期", teachingCode: "134情⑤", teachingRequired: true },
    { id: "EC22-038", name: "音声・音響情報工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3", semester: "後期", teachingCode: "134情⑤" },
    { id: "EC22-039", name: "光通信工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "3,4", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-040", name: "マルチメディア通信工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "4", semester: "前期", teachingCode: "134情⑤", teachingRequired: true },
    { id: "EC22-041", name: "ワイヤレスシステム工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "4", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-042", name: "コンピュータグラフィックス", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "通信メディア科目", year: "4", semester: "前期", teachingCode: "134情⑤" },

    // コンピュータ科目
    { id: "EC22-043", name: "コンピュータプログラミングⅡ", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "1", semester: "後期", teachingCode: "114コンピュ", teachingRequired: true },
    { id: "EC22-044", name: "数値解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-045", name: "基礎プログラミング演習", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-046", name: "インターネットプログラミング", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "2", semester: "前期", teachingCode: "132情③" },
    { id: "EC22-047", name: "データ構造とアルゴリズムⅠ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "2", semester: "後期", teachingCode: "131情②", teachingRequired: true },
    { id: "EC22-048", name: "データ構造とアルゴリズムⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "後期", teachingCode: "131情②" },
    { id: "EC22-049", name: "コンピュータアーキテクチャ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-050", name: "オブジェクト指向プログラミング", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "前期", teachingCode: "131情②" },
    { id: "EC22-051", name: "サーバープログラミング演習", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "前期", teachingCode: "131情②" },
    { id: "EC22-052", name: "ハードウェア演習A", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "2", semester: "後期", teachingCode: "131情②" },
    { id: "EC22-053", name: "ハードウェア演習B", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "後期", teachingCode: "131情②" },
    { id: "EC22-054", name: "特別プログラミング演習", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "後期", teachingCode: "131情②" },
    { id: "EC22-055", name: "人工知能プログラミング演習", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "後期", teachingCode: "131情②" },
    { id: "EC22-056", name: "ネットワークセキュリティと暗号", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "後期", teachingCode: "133情④" },
    { id: "EC22-057", name: "データ解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "前期", teachingCode: "132情③" },
    { id: "EC22-058", name: "データベース", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "コンピュータ科目", year: "3", semester: "後期", teachingCode: "132情③" },

    // 実験科目
    { id: "EC22-059", name: "ワークショップⅡ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "1", semester: "後期" },
    { id: "EC22-060", name: "情報通信基礎実験（前期）", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-061", name: "情報通信基礎実験（後期）", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "2", semester: "後期", teachingCode: "161工業" },
    { id: "EC22-062", name: "情報通信工学実験（前期）", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "3", semester: "前期", teachingCode: "131情②", teachingRequired: true },
    { id: "EC22-063", name: "情報通信工学実験（後期）", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "3", semester: "後期", teachingCode: "132情②", teachingRequired: true },
    { id: "EC22-064", name: "情報通信プロジェクト（前期）", credits: 1.5, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "4", semester: "前期", teachingCode: "132情③", teachingRequired: true },
    { id: "EC22-065", name: "情報通信プロジェクト（後期）", credits: 1.5, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験科目", year: "4", semester: "後期", teachingCode: "133情③", teachingRequired: true },

    // 卒業研究科目
    { id: "EC22-066", name: "卒業研究（前期）", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "卒業研究科目", year: "4", semester: "前期" },
    { id: "EC22-067", name: "卒業研究（後期）", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "卒業研究科目", year: "4", semester: "後期" },

    // 数学科目
    { id: "EC22-068", name: "微分積分学および演習Ⅱ", credits: 4, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "1", semester: "後期", teachingCode: "112解析", teachingRequired: true },
    { id: "EC22-069", name: "微分方程式Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期", teachingCode: "112解析" },
    { id: "EC22-070", name: "情報通信数学A（離散数学）", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "1,2", semester: "後期", teachingCode: "114コンピュ" },
    { id: "EC22-071", name: "情報通信数学B（確率論と情報理論）", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期", teachingCode: "113確統" },
    { id: "EC22-072", name: "情報通信数学C（代数と符号理論）", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "後期", teachingCode: "110代数" },

    // 物理科目
    { id: "EC22-073", name: "電磁気学基礎および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "物理科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EC22-074", name: "応用物理学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EC22-075", name: "電磁気学応用", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理科目", year: "2", semester: "後期", teachingCode: "160工業" },

    // ========================================
    // 専門教育科目 - キャリア科目
    // ========================================
    { id: "EC22-076", name: "インターンシップ（前期）", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "キャリア科目", year: "3", semester: "前期" },
    { id: "EC22-077", name: "インターンシップ（後期）", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "キャリア科目", year: "3", semester: "後期" },
    { id: "EC22-078", name: "ビジネス論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "キャリア科目", year: "3", semester: "前期" },
    { id: "EC22-079", name: "職業指導", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "前期", teachingCode: "161職指" },
    { id: "EC22-080", name: "コンピュータ基礎および演習Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2,3,4", semester: "前期", teachingCode: "131情②" },
    { id: "EC22-081", name: "情報システムの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2,3,4", semester: "後期", teachingCode: "132情③" },
    { id: "EC22-082", name: "情報通信ネットワークの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2,3,4", semester: "後期", teachingCode: "133情④" },
    { id: "EC22-083", name: "マルチメディア表現技術の基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2,3,4", semester: "前期", teachingCode: "134情⑤" },
    { id: "EC22-084", name: "線形代数学Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "前期", teachingCode: "110代数" },
    { id: "EC22-085", name: "数式処理", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "前期", teachingCode: "114コンピュ" },
    { id: "EC22-086", name: "代数学入門", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "1", semester: "後期", teachingCode: "110代数", teachingRequired: true },
    { id: "EC22-087", name: "解析学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "前期", teachingCode: "112解析" },
    { id: "EC22-088", name: "幾何学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "前期", teachingCode: "111幾何", teachingRequired: true },
    { id: "EC22-089", name: "代数学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "後期", teachingCode: "110代数" },
    { id: "EC22-090", name: "微分幾何学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "後期", teachingCode: "111幾何" },
    { id: "EC22-091", name: "確率・統計Ⅰ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "前期", teachingCode: "113確統", teachingRequired: true },
    { id: "EC22-092", name: "確率・統計Ⅱ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "後期", teachingCode: "113確統" },
    { id: "EC22-093", name: "複素解析学Ⅰ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "前期", teachingCode: "112解析" },
    { id: "EC22-094", name: "複素解析学Ⅱ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "後期", teachingCode: "112解析" },
    { id: "EC22-095", name: "微分方程式Ⅱ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EC22-096", name: "工学技術概論", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "後期", teachingCode: "160工業" },

    // ========================================
    // 専門教育科目 - コミュニケーション科目
    // ========================================
    { id: "EC22-097", name: "グループスタディ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "コミュニケーション科目", year: "3", semester: "前期" },

    // ========================================
    // 専門教育科目 - アセスメント科目
    // ========================================
    { id: "EC22-098", name: "情報通信工学総合演習", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "アセスメント科目", year: "3", semester: "後期" },

    // ========================================
    // 共通教育科目 - 英語科目
    // ========================================
    // 基幹科目
    { id: "EC22-099", name: "総合英語Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "「総合英語Ⅰ」と「口語英語Ⅰ」は同時に履修登録しなければならない" },
    { id: "EC22-100", name: "口語英語Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "「総合英語Ⅰ」と「口語英語Ⅰ」は同時に履修登録しなければならない" },
    { id: "EC22-101", name: "総合英語Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期" },
    { id: "EC22-102", name: "口語英語Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期" },
    { id: "EC22-103", name: "総合英語Ⅲ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "前期" },
    { id: "EC22-104", name: "総合英語Ⅳ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "後期" },

    // 発展科目
    { id: "EC22-105", name: "英語演習A（Speaking）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC22-106", name: "英語演習B（Listening）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC22-107", name: "英語演習C（Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC22-108", name: "英語演習D（Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC22-109", name: "英語演習E（Global Communication）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC22-110", name: "英語演習F（検定英語）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EC22-111", name: "英語演習G（Engineering Presentation）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EC22-112", name: "英語演習H（Academic Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "4", semester: "前期／後期" },
    { id: "EC22-113", name: "英語演習I（Academic Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "4", semester: "前期／後期" },
    { id: "EC22-114", name: "国内英語短期研修", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EC22-115", name: "海外英語短期研修", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },

    // ========================================
    // 共通教育科目 - 人間科学科目
    // ========================================
    // ジェネリックスキル・キャリア
    { id: "EC22-116", name: "東京電機大学で学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期", notes: "修学基礎科目、2022年度入学生のみ開講" },

    // 人間・社会理解
    { id: "EC22-117", name: "アカデミックスキルズ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "1", semester: "前期／後期", notes: "2022年度入学生のみ開講、再履修不可" },
    { id: "EC22-118", name: "情報と職業", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", teachingCode: "135情⑥", teachingRequired: true },
    { id: "EC22-119", name: "論理的思考法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-120", name: "自己心理学セミナー", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-121", name: "企業と経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-122", name: "歴史理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-123", name: "実用法律入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-124", name: "哲学と倫理の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-125", name: "日本経済入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-126", name: "科学と技術の社会史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-127", name: "介護福祉論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", teachingCode: "3601" },
    { id: "EC22-128", name: "異文化理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-129", name: "社会のなかの科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期" },
    { id: "EC22-130", name: "情報デザインと心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-131", name: "認知心理学とその工学的応用", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-132", name: "人間関係の心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "人文社会系オープン科目" },
    { id: "EC22-133", name: "企業と社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-134", name: "芸術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-135", name: "日本国憲法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-136", name: "情報とネットワークの経済社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-137", name: "大学と社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },

    // 技術者教養
    { id: "EC22-138", name: "技術者教養ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-139", name: "技術者倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-140", name: "科学技術の失敗から学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "人文社会系オープン科目" },
    { id: "EC22-141", name: "先端技術と社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-142", name: "製造物責任法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-143", name: "科学技術と企業経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-144", name: "情報化社会とコミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "130情①" },
    { id: "EC22-145", name: "情報倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "130情①", teachingRequired: true },
    { id: "EC22-146", name: "情報化社会と知的財産権", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "130情①", teachingRequired: true },

    // グローバル教養
    { id: "EC22-147", name: "グローバリズムの政治・経済", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-148", name: "異文化間コミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-149", name: "国際政治の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-150", name: "持続可能性と科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-151", name: "グローバル社会の市民論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-152", name: "中国語・中国文化", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期" },

    // スポーツ・健康
    { id: "EC22-153", name: "健康と生活", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期／後期" },
    { id: "EC22-154", name: "ウェルネス＆スポーツ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期" },
    { id: "EC22-155", name: "エクササイズ＆スポーツ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期" },
    { id: "EC22-156", name: "コミュニケーションスポーツ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期" },
    { id: "EC22-157", name: "アウトドアスポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、2022年度開講せず" },
    { id: "EC22-158", name: "アウトドアスポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講" },
    { id: "EC22-159", name: "アウトドアスポーツC", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "冬期集中科目" },
    { id: "EC22-160", name: "身体運動の仕組み", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期" },

    // PBL特化科目
    { id: "EC22-161", name: "人間科学プロジェクトⅠ（前期）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "2,3,4", semester: "前期", notes: "集中科目" },
    { id: "EC22-162", name: "人間科学プロジェクトⅠ（後期）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "2,3,4", semester: "後期", notes: "集中科目" },
    { id: "EC22-163", name: "人間科学プロジェクトⅡ（前期）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "3,4", semester: "前期", notes: "集中科目" },
    { id: "EC22-164", name: "人間科学プロジェクトⅡ（後期）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "3,4", semester: "後期", notes: "集中科目" },

    // 教職教養
    { id: "EC22-165", name: "教育心理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "1", semester: "後期", teachingCode: "3304", teachingRequired: true, notes: "教職課程履修者のみ履修可" },
    { id: "EC22-166", name: "教育学概論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "前期", teachingCode: "3301", teachingRequired: true, notes: "教職課程履修者のみ履修可" },
    { id: "EC22-167", name: "教育社会学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "後期", teachingCode: "3303", teachingRequired: true, notes: "教職課程履修者のみ履修可" },
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
        { label: "必修科目", requiredCredits: 16, countMode: "subjects" as const, filter: { classification: "必修" } },
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
        { label: "専門科目", requiredCredits: 78, filter: { subcategory1: "専門科目" } },
        { label: "任意に選択し修得した科目", requiredCredits: 4, filter: {} },
        { label: "合計", requiredCredits: 124, filter: {} },
      ],
    },
  ],
  creditLimits: [{ label: "通常", maxCredits: 24 }],
};
