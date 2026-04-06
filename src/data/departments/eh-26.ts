import type { DepartmentDefinition } from "@/types";

/**
 * 東京電機大学 工学部 電子システム工学科（2026年度入学）
 */
export const eh26: DepartmentDefinition = {
  id: "eh-26",
  departmentCode: "EH",
  entranceYear: 2026,
  name: "電子システム工学科",
  faculty: "工学部",
  subjects: [
    // ========================================
    // 工学基礎科目
    // ========================================
    // 数学
    { id: "EH26-001", name: "微分積分学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、初歩クラスは通2コマ" },
    { id: "EH26-002", name: "線形代数学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講、オープン科目" },
    { id: "EH26-003", name: "数学演習B", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    // 情報
    { id: "EH26-004", name: "数理・データサイエンス入門", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },
    { id: "EH26-005", name: "コンピュータプログラミングⅠ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", notes: "基礎要件" },
    // 自然科学技術
    { id: "EH26-006", name: "物理学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「化学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "EH26-007", name: "化学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「物理学実験」との隔週開講、初回の履修は後期開講のクラスを履修すること" },
    { id: "EH26-008", name: "基礎物理学", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期", notes: "後期に再履修クラスを開講" },
    { id: "EH26-009", name: "物理学A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "基礎物理学、物理学A〜Cいずれか1科目を修得のこと（択一必修）" },
    { id: "EH26-010", name: "物理学B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修" },
    { id: "EH26-011", name: "物理学C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修" },
    { id: "EH26-012", name: "基礎化学", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "基礎化学、科学技術概論A〜Eいずれか1科目を修得のこと（択一必修）" },
    { id: "EH26-013", name: "科学技術概論A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "EH26-014", name: "科学技術概論B", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "EH26-015", name: "科学技術概論C", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    { id: "EH26-016", name: "科学技術概論D", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "オープン科目、択一必修" },
    { id: "EH26-017", name: "科学技術概論E", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "択一必修" },
    // ハンズオンワークショップ
    { id: "EH26-018", name: "ハンズオンワークショップ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "ハンズオンワークショップ", year: "1", semester: "後期" },

    // ========================================
    // 専門教育科目 - 基礎数学科目
    // ========================================
    { id: "EH26-019", name: "微分積分学Ⅱおよび演習", credits: 4, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "1", semester: "後期" },
    { id: "EH26-020", name: "線形代数学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "1", semester: "後期" },
    { id: "EH26-021", name: "微分方程式Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "2", semester: "前期" },
    { id: "EH26-022", name: "確率・統計Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "2", semester: "前期" },
    { id: "EH26-023", name: "ベクトル解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "2", semester: "前期" },
    { id: "EH26-024", name: "フーリエ解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "2", semester: "前期" },
    { id: "EH26-025", name: "数値解析学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "2", semester: "前期" },
    { id: "EH26-026", name: "複素解析学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "基礎数学科目", year: "3", semester: "前期" },

    // ========================================
    // 専門教育科目 - 実験・実習科目
    // ========================================
    { id: "EH26-027", name: "ハンズオンワークショップⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "2", semester: "前期", notes: "前期集中" },
    { id: "EH26-028", name: "電子システム工学総合演習", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "3", semester: "後期", notes: "アセスメント科目" },
    { id: "EH26-029", name: "インターンシップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "実験・実習科目", year: "3,4", semester: "前期／後期" },

    // ========================================
    // 専門教育科目 - 専門科目
    // ========================================
    { id: "EH26-030", name: "電子システム工学入門", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "専門科目", year: "1", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-031", name: "電気回路基礎", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "専門科目", year: "1", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-032", name: "電磁気学Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-033", name: "電磁気学Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電", notes: "2年前期は履修不可" },
    { id: "EH26-034", name: "電磁気学Ⅲ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-035", name: "電気回路Ⅰ", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-036", name: "電気回路Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-037", name: "回路解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-038", name: "電子回路Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-039", name: "電子回路Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-040", name: "論理回路設計", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-041", name: "論理システム設計", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "1310情②・1730情報" },
    { id: "EH26-042", name: "電子計測", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-043", name: "自動制御", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "1310情②・1730情報" },
    { id: "EH26-044", name: "半導体物理基礎", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-045", name: "量子物理学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-046", name: "電子・光材料", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-047", name: "電子デバイスⅠ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-048", name: "電子デバイスⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-049", name: "プログラミング基礎", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "専門科目", year: "1", semester: "前期", teachingCode: "1310情②・1730情報" },
    { id: "EH26-050", name: "プログラミングⅠ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "1310情②・1730情報" },
    { id: "EH26-051", name: "プログラミングⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-052", name: "ホームエレクトロニクス", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-053", name: "基礎光学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "1330情④" },
    { id: "EH26-054", name: "マイクロプロセッサ応用", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "1320情③" },
    { id: "EH26-055", name: "コンピュータアーキテクチャ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "1310情②・1730情報" },
    { id: "EH26-056", name: "信号処理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "前期", teachingCode: "1320情③" },
    { id: "EH26-057", name: "応用信号処理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "後期", teachingCode: "1320情③" },
    { id: "EH26-058", name: "電気電子機器", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-059", name: "人工知能基礎", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "1320情③" },
    { id: "EH26-060", name: "光エレクトロニクス", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "後期", teachingCode: "1330情④" },
    { id: "EH26-061", name: "情報理論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "2", semester: "前期", teachingCode: "1330情④" },
    { id: "EH26-062", name: "高周波回路", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-063", name: "通信機器", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "後期", teachingCode: "1330情④" },
    { id: "EH26-064", name: "音響工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "後期", teachingCode: "1340情⑤" },
    { id: "EH26-065", name: "電磁波工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-066", name: "センサーエレクトロニクス", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-067", name: "光通信工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "前期", teachingCode: "1330情④" },
    { id: "EH26-068", name: "光情報処理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "前期", teachingCode: "1310情②・1730情報" },
    { id: "EH26-069", name: "非線形光学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "専門科目", year: "3,4", semester: "後期", teachingCode: "1330情④" },

    // ========================================
    // 専門教育科目 - 実験実習（専門）
    // ========================================
    { id: "EH26-070", name: "電子システム工学基礎実験Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験実習", year: "2", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-071", name: "電子システム工学基礎実験Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験実習", year: "2", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-072", name: "電子システム工学実験Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験実習", year: "3", semester: "前期", teachingCode: "160工業・1710機電" },
    { id: "EH26-073", name: "電子システム工学実験Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "実験実習", year: "3", semester: "後期", teachingCode: "160工業・1710機電" },
    { id: "EH26-074", name: "電子システムキャリア実践", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "実験実習", year: "3", semester: "前期" },

    // ========================================
    // 専門教育科目 - コンピュータプレゼンテーション
    // ========================================
    { id: "EH26-075", name: "コンピュータプレゼンテーションⅠ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "コンピュータプレゼンテーション", year: "4", semester: "前期", teachingCode: "1330情④" },
    { id: "EH26-076", name: "コンピュータプレゼンテーションⅡ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "コンピュータプレゼンテーション", year: "4", semester: "後期", teachingCode: "1330情④" },

    // ========================================
    // 専門教育科目 - その他専門
    // ========================================
    { id: "EH26-077", name: "技術英語", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "その他専門", year: "3", semester: "前期" },
    { id: "EH26-078", name: "ビジネス英語", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "その他専門", year: "3", semester: "後期" },
    { id: "EH26-079", name: "卒業研究", credits: 6, category: "専門教育科目", classification: "必修", subcategory1: "専門科目", subcategory2: "卒業研究科目", year: "4", semester: "前期／後期" },
    { id: "EH26-080", name: "通信法規", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "その他専門", year: "3,4", semester: "前期" },
    { id: "EH26-081", name: "品質管理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門科目", subcategory2: "その他専門", year: "3,4", semester: "後期" },

    // ========================================
    // 専門教育科目 - 資格関連科目
    // ========================================
    { id: "EH26-082", name: "コンピュータ基礎および演習Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "前期", teachingCode: "1310情②" },
    { id: "EH26-083", name: "情報システムの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "後期", teachingCode: "1320情③" },
    { id: "EH26-084", name: "情報通信ネットワークの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "後期", teachingCode: "1330情④" },
    { id: "EH26-085", name: "マルチメディア表現技術の基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "前期", teachingCode: "1340情⑤" },
    { id: "EH26-086", name: "職業指導", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "3", semester: "前期", teachingCode: "161職指" },
    { id: "EH26-087", name: "栽培", credits: 1, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "前期", teachingCode: "1720生物", notes: "前期集中" },
    { id: "EH26-088", name: "工業技術概論", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "3", semester: "後期", teachingCode: "160工業" },
    { id: "EH26-089", name: "機械のしくみ", credits: 1, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "前期", teachingCode: "160工業・1710機電", notes: "前期集中" },
    { id: "EH26-090", name: "加工学基礎", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "専門科目", subcategory2: "資格関連科目", year: "2", semester: "前期", teachingCode: "1700材料" },

    // ========================================
    // 共通教育科目 - 英語科目
    // ========================================
    // 基幹科目
    { id: "EH26-091", name: "Academic English Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講、オープン科目" },
    { id: "EH26-092", name: "English for Engineers Ⅰ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "EH26-093", name: "Academic English Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講、オープン科目" },
    { id: "EH26-094", name: "English for Engineers Ⅱ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "1", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },
    { id: "EH26-095", name: "English for Engineers Ⅲ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "前期", notes: "習熟度別、後期に再履修クラスを開講" },
    { id: "EH26-096", name: "English for Engineers Ⅳ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "基幹科目", year: "2", semester: "後期", notes: "習熟度別、前期に再履修クラスを開講" },

    // 発展科目
    { id: "EH26-097", name: "英語演習A（Speaking）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EH26-098", name: "英語演習B（Listening）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EH26-099", name: "英語演習C（Reading）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EH26-100", name: "英語演習D（Writing）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EH26-101", name: "英語演習E（Global Communication）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "2", semester: "前期／後期" },
    { id: "EH26-102", name: "英語演習F（検定英語）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EH26-103", name: "英語演習G（Engineering Presentation）", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "3", semester: "前期／後期" },
    { id: "EH26-104", name: "国内英語短期研修", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EH26-105", name: "海外英語短期研修A", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },
    { id: "EH26-106", name: "海外英語短期研修B", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "英語科目", subcategory2: "発展科目", year: "全", semester: "前期／後期", notes: "集中講義" },

    // ========================================
    // 共通教育科目 - 人間科学科目
    // ========================================
    // ジェネリックスキル・キャリア
    { id: "EH26-107", name: "東京電機大学で学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期", notes: "修学基礎科目、2026年度新入生のみ開講、オープン科目" },
    { id: "EH26-108", name: "アカデミックスキルズ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "1", semester: "前期／後期", notes: "2026年度新入生のみ開講、再履修不可" },
    { id: "EH26-109", name: "情報と職業", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①", notes: "オープン科目" },
    { id: "EH26-110", name: "キャリアワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "ジェネリックスキル・キャリア", year: "全", semester: "前期／後期" },

    // 人間・社会理解
    { id: "EH26-111", name: "哲学と倫理の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-112", name: "日本経済入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-113", name: "自己心理学セミナー", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-114", name: "企業と経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-115", name: "歴史理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-116", name: "実用法律入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-117", name: "科学と技術の社会史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-118", name: "異文化理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-119", name: "社会のなかの科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-120", name: "介護福祉論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", teachingCode: "3601" },
    { id: "EH26-121", name: "こころの科学ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期" },
    { id: "EH26-122", name: "認知心理学入門", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-123", name: "人間関係の心理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-124", name: "企業と社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-125", name: "芸術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-126", name: "日本国憲法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-127", name: "情報と経済分析", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-128", name: "大学での学びと私のキャリア", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "全", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-129", name: "子どもと社会", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-130", name: "社会の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-131", name: "政治理解の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "人間・社会理解", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // 技術者教養
    { id: "EH26-132", name: "技術者教養ワークショップ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期" },
    { id: "EH26-133", name: "技術者倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-134", name: "科学技術の失敗から学ぶ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-135", name: "先端技術と社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-136", name: "科学技術と企業経営", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-137", name: "情報化社会とコミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EH26-138", name: "情報倫理", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EH26-139", name: "情報化社会と知的財産権", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", teachingCode: "1300情①" },
    { id: "EH26-140", name: "生命倫理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "技術者教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // グローバル教養
    { id: "EH26-141", name: "グローバル経済のメカニズム", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-142", name: "グローバル時代の文化・歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-143", name: "国際政治の基礎", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-144", name: "持続可能性と科学技術", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-145", name: "グローバル社会の市民論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-146", name: "多文化コミュニケーション", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-147", name: "戦争と平和の歴史", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-148", name: "グローバル時代の社会問題", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },
    { id: "EH26-149", name: "国際社会と法", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "グローバル教養", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // スポーツ・健康
    { id: "EH26-150", name: "健康と生活", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期／後期", notes: "基礎要件" },
    { id: "EH26-151", name: "ウェルネス＆スポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "基礎要件" },
    { id: "EH26-152", name: "ウェルネス＆スポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "基礎要件" },
    { id: "EH26-153", name: "スポーツ＆エクササイズ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "EH26-154", name: "コミュニケーションスポーツ", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "基礎要件" },
    { id: "EH26-155", name: "アウトドアスポーツA", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "EH26-156", name: "アウトドアスポーツB", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "前期", notes: "夏期集中科目、隔年開講、基礎要件" },
    { id: "EH26-157", name: "アウトドアスポーツC", credits: 1, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "全", semester: "後期", notes: "冬期集中科目、基礎要件" },
    { id: "EH26-158", name: "身体運動のしくみ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "スポーツ・健康", year: "2,3,4", semester: "前期／後期", notes: "オープン科目" },

    // PBL特化科目
    { id: "EH26-159", name: "人間科学プロジェクトⅠ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "2,3,4", semester: "前期／後期", notes: "集中科目、オープン科目" },
    { id: "EH26-160", name: "人間科学プロジェクトⅡ", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "PBL特化科目", year: "3,4", semester: "前期／後期", notes: "集中科目、プロジェクトⅠ修得者のみ、オープン科目" },

    // 教職教養
    { id: "EH26-161", name: "教育心理学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "1", semester: "後期", teachingCode: "3304", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "EH26-162", name: "教育学概論", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "前期", teachingCode: "3301", teachingRequired: true, notes: "教職課程履修者のみ" },
    { id: "EH26-163", name: "教育社会学", credits: 2, category: "共通教育科目", classification: "選択", subcategory1: "人間科学科目", subcategory2: "教職教養", year: "2", semester: "後期", teachingCode: "3303", teachingRequired: true, notes: "教職課程履修者のみ" },
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
