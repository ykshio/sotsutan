import type { DepartmentDefinition } from "@/types";

/**
 * 東京電機大学 工学部 応用化学科（2026年度入学）
 */
export const es26: DepartmentDefinition = {
  id: "es-26",
  departmentCode: "ES",
  entranceYear: 2026,
  name: "応用化学科",
  faculty: "工学部",
  subjects: [
    // ========================================
    // 工学基礎科目
    // ========================================
    // 数学
    { id: "ES26-001", name: "微分積分学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、初歩クラスは通2コマ" },
    { id: "ES26-002", name: "線形代数学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、オープン科目" },
    { id: "ES26-003", name: "数学演習A", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    // 情報
    { id: "ES26-004", name: "数理・データサイエンス入門", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },
    { id: "ES26-005", name: "コンピュータプログラミングⅠ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },
    // 自然科学技術
    { id: "ES26-006", name: "物理学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", teachingCode: "129実験", notes: "週2コマ開講「化学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "ES26-007", name: "化学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", teachingCode: "129実験", notes: "週2コマ開講「物理学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "ES26-008", name: "基礎物理学", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    { id: "ES26-009", name: "物理学A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", teachingCode: "120物理", notes: "物理学A〜C,基礎化学,科学技術概論A〜Eのいずれか1科目（択一必修）" },
    { id: "ES26-010", name: "物理学B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", teachingCode: "120物理", notes: "択一必修" },
    { id: "ES26-011", name: "物理学C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", teachingCode: "120物理", notes: "択一必修" },
    { id: "ES26-012", name: "基礎化学", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修" },
    { id: "ES26-013", name: "科学技術概論A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "ES26-014", name: "科学技術概論B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "ES26-015", name: "科学技術概論C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "ES26-016", name: "科学技術概論D", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "オープン科目、択一必修" },
    { id: "ES26-017", name: "科学技術概論E", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    // ハンズオンワークショップ
    { id: "ES26-018", name: "ハンズオンワークショップ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "ハンズオンワークショップ", year: "1", semester: "前期" },

    // ========================================
    // 専門教育科目 - 応用化学系基幹科目
    // ========================================
    { id: "ES26-019", name: "化学Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "1", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-020", name: "化学Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "1", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-021", name: "化学演習Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "1", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-022", name: "化学演習Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "1", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-023", name: "応用化学実験", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "1", semester: "後期", teachingCode: "129実験" },
    { id: "ES26-024", name: "環境と化学", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "1", semester: "後期" },
    { id: "ES26-025", name: "コンピューター化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "2", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-026", name: "環境物質学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "応用化学系基幹科目", year: "3,4", semester: "前期" },

    // ========================================
    // 専門教育科目 - キャリア系
    // ========================================
    { id: "ES26-027", name: "卒業研究", credits: 6, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "キャリア系", year: "4", semester: "前期／後期" },
    { id: "ES26-028", name: "インターンシップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "キャリア系", year: "3", semester: "後期" },
    { id: "ES26-029", name: "応用化学総合演習Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "キャリア系", year: "3", semester: "前期" },
    { id: "ES26-030", name: "応用化学総合演習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "アセスメント科目", year: "3", semester: "後期", notes: "アセスメント科目" },

    // ========================================
    // 専門教育科目 - 物理化学系
    // ========================================
    { id: "ES26-031", name: "物理化学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理化学系", year: "2", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-032", name: "物理化学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理化学系", year: "2", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-033", name: "物理化学演習Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理化学系", year: "2", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-034", name: "物理化学演習Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理化学系", year: "2", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-035", name: "物理化学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "物理化学系", year: "2", semester: "前期", teachingCode: "129実験" },
    { id: "ES26-036", name: "量子化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理化学系", year: "3,4", semester: "前期" },
    { id: "ES26-037", name: "化学熱力学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理化学系", year: "3", semester: "前期" },
    { id: "ES26-038", name: "応用物理化学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "物理化学系", year: "3", semester: "後期", teachingCode: "129実験" },

    // ========================================
    // 専門教育科目 - 化学工学系
    // ========================================
    { id: "ES26-039", name: "化学工学Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "化学工学系", year: "2", semester: "前期" },
    { id: "ES26-040", name: "化学工学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "化学工学系", year: "2", semester: "後期" },
    { id: "ES26-041", name: "化学工学演習", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "化学工学系", year: "2", semester: "前期" },
    { id: "ES26-042", name: "化学工学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "化学工学系", year: "2", semester: "後期" },
    { id: "ES26-043", name: "応用化学工学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "化学工学系", year: "3", semester: "前期" },
    { id: "ES26-044", name: "生物化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "化学工学系", year: "2", semester: "後期", teachingCode: "124生物" },
    { id: "ES26-045", name: "反応工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "化学工学系", year: "3", semester: "前期" },
    { id: "ES26-046", name: "生物化学工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "化学工学系", year: "3", semester: "後期" },

    // ========================================
    // 専門教育科目 - 無機・分析化学系
    // ========================================
    { id: "ES26-047", name: "無機化学Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "1", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-048", name: "無機化学Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "2", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-049", name: "分析化学", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "2", semester: "前期" },
    { id: "ES26-050", name: "無機・分析化学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "2", semester: "前期", teachingCode: "129実験" },
    { id: "ES26-051", name: "応用無機・分析化学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "3", semester: "後期", teachingCode: "129実験" },
    { id: "ES26-052", name: "無機材料工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "3,4", semester: "前期" },
    { id: "ES26-053", name: "電気化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "3", semester: "後期" },
    { id: "ES26-054", name: "機器分析学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "3,4", semester: "前期" },
    { id: "ES26-055", name: "機器分析学演習", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "3", semester: "後期" },
    { id: "ES26-056", name: "光化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "無機・分析化学系", year: "3,4", semester: "前期" },

    // ========================================
    // 専門教育科目 - 有機化学系
    // ========================================
    { id: "ES26-057", name: "有機化学Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "有機化学系", year: "1", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-058", name: "有機化学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "2", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-059", name: "有機化学Ⅲ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "2", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-060", name: "有機化学演習A", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "2", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-061", name: "有機化学演習B", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "2", semester: "後期", teachingCode: "122化学" },
    { id: "ES26-062", name: "有機化学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "有機化学系", year: "2", semester: "後期", teachingCode: "129実験" },
    { id: "ES26-063", name: "応用有機化学実験", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "有機化学系", year: "3", semester: "前期", teachingCode: "129実験" },
    { id: "ES26-064", name: "有機合成化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "3,4", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-065", name: "高分子物性学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "3", semester: "前期", teachingCode: "122化学" },
    { id: "ES26-066", name: "高分子合成学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "3", semester: "後期" },
    { id: "ES26-067", name: "錯体化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "有機化学系", year: "3,4", semester: "後期", teachingCode: "122化学" },

    // ========================================
    // 専門教育科目 - 数学科目
    // ========================================
    { id: "ES26-068", name: "微分方程式Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期" },
    { id: "ES26-069", name: "数値解析学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期" },
    { id: "ES26-070", name: "微分積分学Ⅱおよび演習", credits: 4, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "1", semester: "後期" },
    { id: "ES26-071", name: "線形代数学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期" },

    // ========================================
    // 専門教育科目 - 物理・地学科目
    // ========================================
    { id: "ES26-072", name: "物性物理学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理・地学科目", year: "2", semester: "後期", teachingCode: "120物理" },
    { id: "ES26-073", name: "固体物性", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理・地学科目", year: "3", semester: "前期", teachingCode: "120物理" },
    { id: "ES26-074", name: "地学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理・地学科目", year: "2", semester: "前期", teachingCode: "126地学" },
    { id: "ES26-075", name: "生体触媒工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理・地学科目", year: "3", semester: "前期", teachingCode: "124生物" },
    { id: "ES26-076", name: "総合物理学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "物理・地学科目", year: "2", semester: "前期", teachingCode: "120物理" },

    // ========================================
    // 専門教育科目 - 教職関連科目
    // ========================================
    { id: "ES26-077", name: "総合物理学実験", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "教職関連科目", year: "2", semester: "後期", teachingCode: "129実験", notes: "集中科目" },
    { id: "ES26-078", name: "生物学実験", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "教職関連科目", year: "2", semester: "前期", teachingCode: "129実験", notes: "集中科目" },
    { id: "ES26-079", name: "地学実験", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "教職関連科目", year: "2", semester: "前期", teachingCode: "129実験", notes: "夏期集中講義" },

    // ========================================
    // 共通教育科目 - 英語科目
    // ========================================
    // 基幹科目
    { id: "ES26-080", name: "Academic English Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講、オープン科目" },
    { id: "ES26-081", name: "English for Engineers Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "ES26-082", name: "Academic English Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講、オープン科目" },
    { id: "ES26-083", name: "English for Engineers Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },
    { id: "ES26-084", name: "English for Engineers Ⅲ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "ES26-085", name: "English for Engineers Ⅳ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },

    // 発展科目
    { id: "ES26-086", name: "英語演習A（Speaking）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "ES26-087", name: "英語演習B（Listening）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "ES26-088", name: "英語演習C（Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "ES26-089", name: "英語演習D（Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "ES26-090", name: "英語演習E（Global Communication）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "ES26-091", name: "英語演習F（検定英語）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "ES26-092", name: "英語演習G（Engineering Presentation）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "ES26-093", name: "国内英語短期研修", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "ES26-094", name: "海外英語短期研修A", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "ES26-095", name: "海外英語短期研修B", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },

    // ========================================
    // 共通教育科目 - 人間科学科目
    // ========================================
    // ジェネリックスキル・キャリア
    { id: "ES26-096", name: "東京電機大学で学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期", notes: "修学基礎科目、2026年度新入生のみ開講、オープン科目" },
    { id: "ES26-097", name: "アカデミックスキルズ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期／後期", notes: "2026年度新入生のみ開講、再履修不可" },
    { id: "ES26-098", name: "情報と職業", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①", notes: "オープン科目" },
    { id: "ES26-099", name: "キャリアワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "全", semester: "前期／後期" },

    // 人間・社会理解
    { id: "ES26-100", name: "哲学と倫理の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-101", name: "日本経済入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-102", name: "自己心理学セミナー", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-103", name: "企業と経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-104", name: "歴史理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-105", name: "実用法律入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-106", name: "科学と技術の社会史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-107", name: "異文化理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-108", name: "社会のなかの科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-109", name: "介護福祉論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", teachingCode: "3601" },
    { id: "ES26-110", name: "こころの科学ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "ES26-111", name: "認知心理学入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-112", name: "人間関係の心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-113", name: "企業と社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-114", name: "芸術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-115", name: "日本国憲法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-116", name: "情報と経済分析", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-117", name: "大学での学びと私のキャリア", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-118", name: "子どもと社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-119", name: "社会の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-120", name: "政治理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // 技術者教養
    { id: "ES26-121", name: "技術者教養ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "ES26-122", name: "技術者倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-123", name: "科学技術の失敗から学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-124", name: "先端技術と社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-125", name: "科学技術と企業経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-126", name: "情報化社会とコミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "ES26-127", name: "情報倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "ES26-128", name: "情報化社会と知的財産権", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "ES26-129", name: "生命倫理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // グローバル教養
    { id: "ES26-130", name: "グローバル経済のメカニズム", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-131", name: "グローバル時代の文化・歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-132", name: "国際政治の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-133", name: "持続可能性と科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-134", name: "グローバル社会の市民論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-135", name: "多文化コミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-136", name: "戦争と平和の歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-137", name: "グローバル時代の社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "ES26-138", name: "国際社会と法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // スポーツ・健康
    { id: "ES26-139", name: "健康と生活", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期／後期", notes: "基礎要件" },
    { id: "ES26-140", name: "ウェルネス＆スポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "基礎要件" },
    { id: "ES26-141", name: "ウェルネス＆スポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "基礎要件" },
    { id: "ES26-142", name: "スポーツ＆エクササイズ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "ES26-143", name: "コミュニケーションスポーツ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "ES26-144", name: "アウトドアスポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "ES26-145", name: "アウトドアスポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "ES26-146", name: "アウトドアスポーツC", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "冬期集中科目、基礎要件" },
    { id: "ES26-147", name: "身体運動のしくみ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // PBL特化科目
    { id: "ES26-148", name: "人間科学プロジェクトⅠ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "2,3,4", semester: "前期／後期", notes: "集中科目、オープン科目" },
    { id: "ES26-149", name: "人間科学プロジェクトⅡ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "3,4", semester: "前期／後期", notes: "集中科目、プロジェクトⅠ修得者のみ、オープン科目" },

    // 教職教養
    { id: "ES26-150", name: "教育心理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "1", semester: "後期", teachingCode: "3304", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "ES26-151", name: "教育学概論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "前期", teachingCode: "3301", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "ES26-152", name: "教育社会学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "後期", teachingCode: "3303", teachingRequired: true, notes: "教職課程履修者のみ" },
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
        { label: "必修科目", requiredCredits: 27, countMode: "subjects" as const, filter: { classification: "必修" } },
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
        { label: "自然科学（数学）", requiredCredits: 6, filter: { category: "工学基礎科目", subcategory1: "数学" } },
        { label: "自然科学（情報）", requiredCredits: 4, filter: { category: "工学基礎科目", subcategory1: "情報" } },
        { label: "自然科学（自然科学技術）", requiredCredits: 6, filter: { category: "工学基礎科目", subcategory1: "自然科学技術" } },
        { label: "ハンズオンワークショップ", requiredCredits: 2, filter: { category: "工学基礎科目", subcategory1: "ハンズオンワークショップ" } },
        { label: "専門科目", requiredCredits: 78, filter: { subcategory1: "専門科目" } },
        {
          label: "任意に選択し修得した科目",
          requiredCredits: 4,
          countMode: "overflow" as const,
          overflowSources: [
            { label: "人間科学科目", requiredCredits: 16, filter: { subcategory1: "人間科学科目" } },
            { label: "英語科目", requiredCredits: 8, filter: { subcategory1: "英語科目" } },
            { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" as const } },
            { label: "専門科目", requiredCredits: 78, filter: { subcategory1: "専門科目" } },
          ],
          filter: {},
        },
        { label: "合計", requiredCredits: 124, filter: {} },
      ],
    },
  ],
  creditLimits: [{ label: "通常", maxCredits: 24 }],
};
