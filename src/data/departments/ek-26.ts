import type { DepartmentDefinition } from "@/types";

/**
 * 東京電機大学 工学部 機械工学科（2026年度入学）
 */
export const ek26: DepartmentDefinition = {
  id: "ek-26",
  departmentCode: "EK",
  entranceYear: 2026,
  name: "機械工学科",
  faculty: "工学部",
  subjects: [
    // ========================================
    // 工学基礎科目
    // ========================================
    // 数学
    { id: "EK26-001", name: "微分積分学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、初歩クラスは通2コマ" },
    { id: "EK26-002", name: "線形代数学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、オープン科目" },
    { id: "EK26-003", name: "数学演習A", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    // 情報
    { id: "EK26-004", name: "数理・データサイエンス入門", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },
    { id: "EK26-005", name: "コンピュータプログラミングⅠ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "後期", notes: "基礎要件" },
    // 自然科学技術
    { id: "EK26-006", name: "物理学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「化学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "EK26-007", name: "化学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「物理学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "EK26-008", name: "基礎物理学", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    { id: "EK26-009", name: "物理学A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "物理学A〜Cいずれか1科目を修得のこと（択一必修）" },
    { id: "EK26-010", name: "物理学B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修" },
    { id: "EK26-011", name: "物理学C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修" },
    { id: "EK26-012", name: "科学技術概論A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "科学技術概論A〜Eから1科目修得（択一必修）" },
    { id: "EK26-013", name: "科学技術概論B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "EK26-014", name: "科学技術概論C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "EK26-015", name: "科学技術概論D", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "オープン科目、択一必修" },
    { id: "EK26-016", name: "科学技術概論E", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    // ハンズオンワークショップ
    { id: "EK26-017", name: "ハンズオンワークショップ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "ハンズオンワークショップ", year: "1", semester: "前期" },

    // ========================================
    // 専門教育科目 - 専門科目
    // ========================================
    // 数学科目
    { id: "EK26-018", name: "微分積分学Ⅱおよび演習", credits: 4, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "1", semester: "後期", teachingCode: "112解析" },
    { id: "EK26-019", name: "線形代数学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "1", semester: "後期", teachingCode: "110代数" },
    { id: "EK26-020", name: "微分方程式Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期", teachingCode: "112解析" },
    { id: "EK26-021", name: "微分方程式Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EK26-022", name: "ベクトルおよびテンソル", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期", teachingCode: "112解析" },
    { id: "EK26-023", name: "フーリエ解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EK26-024", name: "複素解析学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EK26-025", name: "複素解析学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "3", semester: "後期", teachingCode: "112解析" },
    { id: "EK26-026", name: "数値解析学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "3", semester: "後期", teachingCode: "112解析" },
    { id: "EK26-027", name: "確率・統計Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期", teachingCode: "113確統" },
    { id: "EK26-028", name: "確率・統計Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "3", semester: "前期", teachingCode: "113確統" },

    // 基礎科目
    { id: "EK26-029", name: "基礎化学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎科目", year: "1", semester: "後期" },

    // 力学科目
    { id: "EK26-030", name: "工業力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "力学科目", year: "1", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-031", name: "工業力学Ⅱおよび演習", credits: 3, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "力学科目", year: "1", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-032", name: "ワークショップⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "力学科目", year: "1", semester: "後期" },

    // 材料力学科目
    { id: "EK26-033", name: "材料力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "材料力学科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-034", name: "材料力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "材料力学科目", year: "2", semester: "後期", teachingCode: "160工業" },

    // 材料系科目
    { id: "EK26-035", name: "材料工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "材料系科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-036", name: "材料強度学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "材料系科目", year: "3", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-037", name: "弾塑性学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "材料系科目", year: "3", semester: "後期", teachingCode: "160工業" },

    // 加工系科目
    { id: "EK26-038", name: "加工学基礎および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "加工系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-039", name: "機械加工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "加工系科目", year: "3", semester: "前期", teachingCode: "160工業" },

    // 流体系科目
    { id: "EK26-040", name: "流体の力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "流体系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-041", name: "流体の力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "流体系科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-042", name: "粘性流体力学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "流体系科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-043", name: "流体機械", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "流体系科目", year: "3", semester: "後期", teachingCode: "160工業" },

    // 熱系科目
    { id: "EK26-044", name: "工業熱力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "熱系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-045", name: "工業熱力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "熱系科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-046", name: "伝熱工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "熱系科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-047", name: "熱機関", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "熱系科目", year: "3", semester: "前期", teachingCode: "160工業" },

    // 振動制御科目
    { id: "EK26-048", name: "メカトロニクス概論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "振動制御科目", year: "1", semester: "後期", teachingCode: "1310情②" },
    { id: "EK26-049", name: "振動学および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "振動制御科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-050", name: "応用振動学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "振動制御科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-051", name: "制御工学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "振動制御科目", year: "3", semester: "前期", teachingCode: "1310情②" },
    { id: "EK26-052", name: "制御工学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "振動制御科目", year: "3", semester: "後期", teachingCode: "1310情②" },
    { id: "EK26-053", name: "ロボット工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "振動制御科目", year: "3", semester: "後期", teachingCode: "1320情③" },
    { id: "EK26-054", name: "計測工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "振動制御科目", year: "3", semester: "前期", teachingCode: "1310情②" },

    // 設計・製図科目
    { id: "EK26-055", name: "機械要素設計および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "設計・製図科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-056", name: "計算機応用設計", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "設計・製図科目", year: "3", semester: "前期", teachingCode: "114コンピュ" },
    { id: "EK26-057", name: "機械設計製図Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "設計・製図科目", year: "2", semester: "前期", teachingCode: "1340情⑤" },
    { id: "EK26-058", name: "機械設計製図Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "設計・製図科目", year: "2", semester: "後期", teachingCode: "1320情③" },
    { id: "EK26-059", name: "機械設計製図Ⅲ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "設計・製図科目", year: "3", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-060", name: "3D-CADワークショップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "設計・製図科目", year: "3", semester: "前期" },

    // 実験実習科目
    { id: "EK26-061", name: "機械工学実験実習Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験実習科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK26-062", name: "機械工学実験実習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験実習科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK26-063", name: "機械工学総合演習Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験実習科目", year: "3", semester: "前期", teachingCode: "160工業", notes: "実験・アセスメント科目" },

    // その他科目
    { id: "EK26-064", name: "品質管理", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "その他科目", year: "4", semester: "前期" },
    { id: "EK26-065", name: "機械工学総合演習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "その他科目", year: "3", semester: "後期", teachingCode: "160工業", notes: "輪講・アセスメント科目" },
    { id: "EK26-066", name: "インターンシップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "その他科目", year: "3", semester: "通年" },
    { id: "EK26-067", name: "卒業研究", credits: 6, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "卒業研究科目", year: "4", semester: "通年" },
    { id: "EK26-068", name: "職業指導", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "その他科目", year: "3", semester: "前期", teachingCode: "161職指" },

    // 資格関連科目
    { id: "EK26-069", name: "コンピュータ基礎および演習Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "前期", teachingCode: "1310情②" },
    { id: "EK26-070", name: "情報システムの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "後期", teachingCode: "1320情③" },
    { id: "EK26-071", name: "情報通信ネットワークの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "後期", teachingCode: "1330情④" },
    { id: "EK26-072", name: "マルチメディア表現技術の基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "前期", teachingCode: "1340情⑤" },

    // 教職科目
    { id: "EK26-073", name: "線形代数学Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "2", semester: "前期", teachingCode: "110代数" },
    { id: "EK26-074", name: "数式処理", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "2", semester: "前期", teachingCode: "114コンピュ" },
    { id: "EK26-075", name: "代数学入門", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "1", semester: "後期", teachingCode: "110代数" },
    { id: "EK26-076", name: "代数学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "2", semester: "後期", teachingCode: "110代数" },
    { id: "EK26-077", name: "解析学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "3", semester: "前期", teachingCode: "112解析" },
    { id: "EK26-078", name: "幾何学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "3", semester: "前期", teachingCode: "111幾何" },
    { id: "EK26-079", name: "微分幾何学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "3", semester: "後期", teachingCode: "111幾何" },
    { id: "EK26-080", name: "工業技術概論", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "教職科目", year: "3", semester: "後期", teachingCode: "160工業" },

    // ========================================
    // 共通教育科目 - 英語科目
    // ========================================
    { id: "EC26-096", name: "Academic English Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講、オープン科目" },
    { id: "EC26-097", name: "English for Engineers Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "EC26-098", name: "Academic English Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講、オープン科目" },
    { id: "EC26-099", name: "English for Engineers Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },
    { id: "EC26-100", name: "English for Engineers Ⅲ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "EC26-101", name: "English for Engineers Ⅳ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },
    { id: "EC26-102", name: "英語演習A（Speaking）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC26-103", name: "英語演習B（Listening）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC26-104", name: "英語演習C（Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC26-105", name: "英語演習D（Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC26-106", name: "英語演習E（Global Communication）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EC26-107", name: "英語演習F（検定英語）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EC26-108", name: "英語演習G（Engineering Presentation）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EC26-109", name: "国内英語短期研修", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EC26-110", name: "海外英語短期研修A", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EC26-111", name: "海外英語短期研修B", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EC26-112", name: "東京電機大学で学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期", notes: "修学基礎科目、2026年度新入生のみ開講、オープン科目" },
    { id: "EC26-113", name: "アカデミックスキルズ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期／後期", notes: "2026年度新入生のみ開講、再履修不可" },
    { id: "EC26-114", name: "情報と職業", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①", notes: "オープン科目" },
    { id: "EC26-115", name: "キャリアワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "全", semester: "前期／後期" },
    { id: "EC26-116", name: "哲学と倫理の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-117", name: "日本経済入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-118", name: "自己心理学セミナー", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-119", name: "企業と経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-120", name: "歴史理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-121", name: "実用法律入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-122", name: "科学と技術の社会史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-123", name: "異文化理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-124", name: "社会のなかの科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-125", name: "介護福祉論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", teachingCode: "3601" },
    { id: "EC26-126", name: "こころの科学ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EC26-127", name: "認知心理学入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-128", name: "人間関係の心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-129", name: "企業と社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-130", name: "芸術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-131", name: "日本国憲法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-132", name: "情報と経済分析", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-133", name: "大学での学びと私のキャリア", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-134", name: "子どもと社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-135", name: "社会の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-136", name: "政治理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-137", name: "技術者教養ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EC26-138", name: "技術者倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-139", name: "科学技術の失敗から学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-140", name: "先端技術と社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-141", name: "科学技術と企業経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-142", name: "情報化社会とコミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EC26-143", name: "情報倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EC26-144", name: "情報化社会と知的財産権", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EC26-145", name: "生命倫理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-146", name: "グローバル経済のメカニズム", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-147", name: "グローバル時代の文化・歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-148", name: "国際政治の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-149", name: "持続可能性と科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-150", name: "グローバル社会の市民論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-151", name: "多文化コミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-152", name: "戦争と平和の歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-153", name: "グローバル時代の社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-154", name: "国際社会と法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-155", name: "健康と生活", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期／後期", notes: "基礎要件" },
    { id: "EC26-156", name: "ウェルネス＆スポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "基礎要件" },
    { id: "EC26-157", name: "ウェルネス＆スポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "基礎要件" },
    { id: "EC26-158", name: "スポーツ＆エクササイズ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "EC26-159", name: "コミュニケーションスポーツ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "EC26-160", name: "アウトドアスポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "EC26-161", name: "アウトドアスポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "EC26-162", name: "アウトドアスポーツC", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "冬期集中科目、基礎要件" },
    { id: "EC26-163", name: "身体運動のしくみ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EC26-164", name: "人間科学プロジェクトⅠ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "2,3,4", semester: "前期／後期", notes: "集中科目、オープン科目" },
    { id: "EC26-165", name: "人間科学プロジェクトⅡ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "3,4", semester: "前期／後期", notes: "集中科目、プロジェクトⅠ修得者のみ、オープン科目" },
    { id: "EC26-166", name: "教育心理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "1", semester: "後期", teachingCode: "3304", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "EC26-167", name: "教育学概論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "前期", teachingCode: "3301", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "EC26-168", name: "教育社会学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "後期", teachingCode: "3303", teachingRequired: true, notes: "教職課程履修者のみ" },
    // 基幹科目

    // 発展科目

    // ========================================
    // 共通教育科目 - 人間科学科目
    // ========================================
    // ジェネリックスキル・キャリア

    // 人間・社会理解

    // 技術者教養

    // グローバル教養

    // スポーツ・健康

    // PBL特化科目

    // 教職教養
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
        { label: "必修科目", requiredCredits: 20, countMode: "subjects" as const, filter: { classification: "必修" } },
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
