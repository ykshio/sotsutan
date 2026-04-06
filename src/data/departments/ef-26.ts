import type { DepartmentDefinition } from "@/types";

/**
 * 東京電機大学 工学部 先端機械工学科（2026年度入学）
 */
export const ef26: DepartmentDefinition = {
  id: "ef-26",
  departmentCode: "EF",
  entranceYear: 2026,
  name: "先端機械工学科",
  faculty: "工学部",
  subjects: [
    // ========================================
    // 工学基礎科目
    // ========================================
    // 数学
    { id: "EF26-001", name: "微分積分学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、初歩クラスは通2コマ" },
    { id: "EF26-002", name: "線形代数学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、オープン科目" },
    { id: "EF26-003", name: "数学演習A", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    // 情報
    { id: "EF26-004", name: "数理・データサイエンス入門", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },
    { id: "EF26-005", name: "コンピュータプログラミングⅠ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "後期", notes: "基礎要件" },
    // 自然科学技術
    { id: "EF26-006", name: "物理学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「化学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "EF26-007", name: "化学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「物理学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "EF26-008", name: "基礎物理学", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    { id: "EF26-009", name: "科学技術概論A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "科学技術概論A〜Eから1科目修得（択一必修）" },
    { id: "EF26-010", name: "科学技術概論B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "EF26-011", name: "科学技術概論C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "EF26-012", name: "科学技術概論D", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "オープン科目、択一必修" },
    { id: "EF26-013", name: "科学技術概論E", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    // ハンズオンワークショップ
    { id: "EF26-014", name: "ハンズオンワークショップ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "ハンズオンワークショップ", year: "1", semester: "前期" },

    // ========================================
    // 専門教育科目 - 専門科目
    // ========================================
    // 数学科目
    { id: "EF26-015", name: "微分積分学Ⅱおよび演習", credits: 4, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "1", semester: "後期" },
    { id: "EF26-016", name: "線形代数学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "1", semester: "後期" },
    { id: "EF26-017", name: "微分方程式Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期" },
    { id: "EF26-018", name: "微分方程式Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "後期" },
    { id: "EF26-019", name: "数値解析学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "3", semester: "前期" },
    { id: "EF26-020", name: "確率・統計Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期" },
    { id: "EF26-021", name: "確率・統計Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "3", semester: "前期" },
    { id: "EF26-022", name: "ベクトルおよびテンソル", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "前期" },
    { id: "EF26-023", name: "複素解析学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "2", semester: "後期" },
    { id: "EF26-024", name: "複素解析学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "3", semester: "後期" },
    { id: "EF26-025", name: "フーリエ解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "数学科目", year: "3", semester: "前期" },

    // 力学科目
    { id: "EF26-026", name: "工業力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "力学科目", year: "1", semester: "前期", teachingCode: "160工業" },
    { id: "EF26-027", name: "工業力学Ⅱおよび演習", credits: 3, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "力学科目", year: "1", semester: "後期", teachingCode: "160工業" },
    { id: "EF26-028", name: "材料力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "力学科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-029", name: "材料力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "力学科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EF26-030", name: "機械力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "力学科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EF26-031", name: "機械力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "力学科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EF26-032", name: "流体の力学および演習", credits: 3, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "力学科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EF26-033", name: "熱力学および演習", credits: 3, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "力学科目", year: "2", semester: "後期", teachingCode: "160工業" },

    // 材料・加工科目
    { id: "EF26-034", name: "材料工学", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "材料・加工科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-035", name: "機械材料学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "材料・加工科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EF26-036", name: "加工学基礎", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "材料・加工科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },

    // 設計科目
    { id: "EF26-037", name: "機構学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "設計科目", year: "2", semester: "後期", teachingCode: "160工業・1700材料" },
    { id: "EF26-038", name: "機械要素設計", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "設計科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-039", name: "機械設計学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "設計科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-040", name: "品質管理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "設計科目", year: "3", semester: "後期" },

    // 計測・制御・光学
    { id: "EF26-041", name: "精密測定法Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "計測・制御・光学", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EF26-042", name: "精密測定法Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "計測・制御・光学", year: "3", semester: "前期", teachingCode: "1320情③" },
    { id: "EF26-043", name: "制御工学Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "計測・制御・光学", year: "3", semester: "前期", teachingCode: "1310情②" },
    { id: "EF26-044", name: "制御工学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "計測・制御・光学", year: "3", semester: "後期", teachingCode: "1310情②" },
    { id: "EF26-045", name: "光学基礎", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "計測・制御・光学", year: "2", semester: "後期", teachingCode: "160工業" },

    // 情報科目
    { id: "EF26-046", name: "情報処理工学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "情報科目", year: "2", semester: "後期", teachingCode: "1310情②・1330情報" },
    { id: "EF26-047", name: "情報処理工学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "情報科目", year: "3", semester: "後期", teachingCode: "1310情②・1330情報" },

    // 電子・電気
    { id: "EF26-048", name: "電子工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "電子・電気", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EF26-049", name: "電気工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "電子・電気", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-050", name: "メカトロニクス概論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "電子・電気", year: "3", semester: "後期", teachingCode: "1310情②" },

    // 先端機械科目
    { id: "EF26-051", name: "先端機械工学入門", credits: 1, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "先端機械科目", year: "1", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-052", name: "光学応用機器", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "先端機械科目", year: "3", semester: "前期", teachingCode: "1340情⑤" },
    { id: "EF26-053", name: "先端自動車工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "先端機械科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-054", name: "先端医用工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "先端機械科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-055", name: "生産加工システムⅠ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "先端機械科目", year: "3", semester: "前期", teachingCode: "160工業・1700材料" },
    { id: "EF26-056", name: "生産加工システムⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "先端機械科目", year: "3", semester: "後期", teachingCode: "160工業・1700材料" },

    // 実験・実習科目
    { id: "EF26-057", name: "ワークショップⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "1", semester: "後期" },
    { id: "EF26-058", name: "機械工学実験実習Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-059", name: "機械工学実験実習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EF26-060", name: "先端機械実験実習Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-061", name: "先端機械実験実習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "3", semester: "後期", teachingCode: "160工業・1710機電" },

    // 製図科目
    { id: "EF26-062", name: "機械設計製図Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "製図科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EF26-063", name: "機械設計製図Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "製図科目", year: "2", semester: "後期", teachingCode: "1340情⑤" },
    { id: "EF26-064", name: "先端機械設計製図Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "製図科目", year: "3", semester: "前期", teachingCode: "1340情⑤" },
    { id: "EF26-065", name: "先端機械設計製図Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "製図科目", year: "3", semester: "後期", teachingCode: "1340情⑤" },

    // 総合演習・卒業研究
    { id: "EF26-066", name: "先端機械工学総合演習", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "総合演習・卒業研究", year: "3", semester: "後期", notes: "アセスメント科目" },
    { id: "EF26-067", name: "卒業研究", credits: 6, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "総合演習・卒業研究", year: "4", semester: "前期／後期" },

    // ========================================
    // 専門教育科目 - キャリア・コミュニケーション
    // ========================================
    { id: "EF26-068", name: "プレゼンテーション", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "キャリア科目", year: "3", semester: "前期" },
    { id: "EF26-069", name: "キャリアデザイン", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "キャリア科目", year: "3", semester: "前期" },
    { id: "EF26-070", name: "インターンシップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "キャリア科目", year: "3,4", semester: "前期／後期" },

    // ========================================
    // 専門教育科目 - 資格関連科目
    // ========================================
    { id: "EF26-071", name: "職業指導", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "前期", teachingCode: "161職指" },
    { id: "EF26-072", name: "コンピュータ基礎および演習Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "前期", teachingCode: "1310情②" },
    { id: "EF26-073", name: "情報システムの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "後期", teachingCode: "1320情③" },
    { id: "EF26-074", name: "情報通信ネットワークの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "後期", teachingCode: "1330情④" },
    { id: "EF26-075", name: "マルチメディア表現技術の基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "前期", teachingCode: "1340情⑤" },
    { id: "EF26-076", name: "栽培", credits: 1, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "2", semester: "前期", teachingCode: "1720生物", notes: "集中科目" },
    { id: "EF26-077", name: "工業技術概論", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "キャリア科目", year: "3", semester: "後期", teachingCode: "160工業" },

    // ========================================
    // 共通教育科目 - 英語科目
    // ========================================
    // 基幹科目
    { id: "EF26-078", name: "Academic English Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講、オープン科目" },
    { id: "EF26-079", name: "English for Engineers Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "EF26-080", name: "Academic English Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講、オープン科目" },
    { id: "EF26-081", name: "English for Engineers Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },
    { id: "EF26-082", name: "English for Engineers Ⅲ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "EF26-083", name: "English for Engineers Ⅳ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },

    // 発展科目
    { id: "EF26-084", name: "英語演習A（Speaking）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EF26-085", name: "英語演習B（Listening）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EF26-086", name: "英語演習C（Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EF26-087", name: "英語演習D（Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EF26-088", name: "英語演習E（Global Communication）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EF26-089", name: "英語演習F（検定英語）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EF26-090", name: "英語演習G（Engineering Presentation）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EF26-091", name: "国内英語短期研修", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EF26-092", name: "海外英語短期研修A", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EF26-093", name: "海外英語短期研修B", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },

    // ========================================
    // 共通教育科目 - 人間科学科目
    // ========================================
    // ジェネリックスキル・キャリア
    { id: "EF26-094", name: "東京電機大学で学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期", notes: "修学基礎科目、2026年度新入生のみ開講、オープン科目" },
    { id: "EF26-095", name: "アカデミックスキルズ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期／後期", notes: "2026年度新入生のみ開講、再履修不可" },
    { id: "EF26-096", name: "情報と職業", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①", notes: "オープン科目" },
    { id: "EF26-097", name: "キャリアワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "全", semester: "前期／後期" },

    // 人間・社会理解
    { id: "EF26-098", name: "哲学と倫理の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-099", name: "日本経済入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-100", name: "自己心理学セミナー", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-101", name: "企業と経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-102", name: "歴史理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-103", name: "実用法律入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-104", name: "科学と技術の社会史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-105", name: "異文化理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-106", name: "社会のなかの科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-107", name: "介護福祉論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", teachingCode: "3601" },
    { id: "EF26-108", name: "こころの科学ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EF26-109", name: "認知心理学入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-110", name: "人間関係の心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-111", name: "企業と社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-112", name: "芸術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-113", name: "日本国憲法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-114", name: "情報と経済分析", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-115", name: "大学での学びと私のキャリア", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-116", name: "子どもと社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-117", name: "社会の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-118", name: "政治理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // 技術者教養
    { id: "EF26-119", name: "技術者教養ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EF26-120", name: "技術者倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-121", name: "科学技術の失敗から学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-122", name: "先端技術と社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-123", name: "科学技術と企業経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-124", name: "情報化社会とコミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EF26-125", name: "情報倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EF26-126", name: "情報化社会と知的財産権", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EF26-127", name: "生命倫理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // グローバル教養
    { id: "EF26-128", name: "グローバル経済のメカニズム", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-129", name: "グローバル時代の文化・歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-130", name: "国際政治の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-131", name: "持続可能性と科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-132", name: "グローバル社会の市民論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-133", name: "多文化コミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-134", name: "戦争と平和の歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-135", name: "グローバル時代の社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EF26-136", name: "国際社会と法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // スポーツ・健康
    { id: "EF26-137", name: "健康と生活", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期／後期", notes: "基礎要件" },
    { id: "EF26-138", name: "ウェルネス＆スポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "基礎要件" },
    { id: "EF26-139", name: "ウェルネス＆スポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "基礎要件" },
    { id: "EF26-140", name: "スポーツ＆エクササイズ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "EF26-141", name: "コミュニケーションスポーツ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "EF26-142", name: "アウトドアスポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "EF26-143", name: "アウトドアスポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "EF26-144", name: "アウトドアスポーツC", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "冬期集中科目、基礎要件" },
    { id: "EF26-145", name: "身体運動のしくみ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // PBL特化科目
    { id: "EF26-146", name: "人間科学プロジェクトⅠ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "2,3,4", semester: "前期／後期", notes: "集中科目、オープン科目" },
    { id: "EF26-147", name: "人間科学プロジェクトⅡ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "3,4", semester: "前期／後期", notes: "集中科目、プロジェクトⅠ修得者のみ、オープン科目" },

    // 教職教養
    { id: "EF26-148", name: "教育心理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "1", semester: "後期", teachingCode: "3304", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "EF26-149", name: "教育学概論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "前期", teachingCode: "3301", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "EF26-150", name: "教育社会学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "後期", teachingCode: "3303", teachingRequired: true, notes: "教職課程履修者のみ" },
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
        { label: "必修科目", requiredCredits: 23, countMode: "subjects" as const, filter: { classification: "必修" } },
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
