import type { DepartmentDefinition } from "@/types";

/**
 * 東京電機大学大学院 工学研究科 情報通信工学専攻（修士課程）（2026年度入学）
 */
export const kmc26: DepartmentDefinition = {
  id: "kmc-26",
  departmentCode: "KMC",
  entranceYear: 2026,
  name: "情報通信工学専攻（修士）",
  faculty: "工学研究科",
  subjects: [
    // ========================================
    // 専門研究（必修）
    // ========================================
    { id: "KMC26-001", name: "情報通信工学特別演習Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門研究", year: "1", semester: "通年" },
    { id: "KMC26-002", name: "情報通信工学特別演習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門研究", year: "2", semester: "通年" },
    { id: "KMC26-003", name: "情報通信工学セミナーⅠ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門研究", year: "1,2", semester: "年次継続", notes: "3年制社会人コースは2・3年次の配当、研究指導教員が担当する" },
    { id: "KMC26-004", name: "情報通信工学セミナーⅡ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門研究", year: "1,2", semester: "年次継続" },
    { id: "KMC26-005", name: "情報通信工学特別研究Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "専門研究", year: "1", semester: "通年", notes: "2年次配当、3年制社会人コースは3年次配当" },
    { id: "KMC26-006", name: "情報通信工学特別研究Ⅱ", credits: 4, category: "専門教育科目", classification: "必修", subcategory1: "専門研究", year: "2", semester: "通年", notes: "3年制社会人コースは3年次配当" },

    // ========================================
    // 情報システム系（選択）
    // ========================================
    { id: "KMC26-007", name: "非同期システム特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "2", semester: "前期", teachingCode: "情報" },
    { id: "KMC26-008", name: "アルゴリズム特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "1", semester: "前期", teachingCode: "情報" },
    { id: "KMC26-009", name: "デジタル・フォレンジック", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "1", semester: "後期", teachingCode: "情報" },
    { id: "KMC26-010", name: "サイバーセキュリティ特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "1", semester: "前期" },
    { id: "KMC26-011", name: "サイバーセキュリティ基礎Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "1,2", semester: "前期", teachingCode: "情報" },
    { id: "KMC26-012", name: "サイバーセキュリティ基礎Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "1,2", semester: "前期", teachingCode: "情報" },
    { id: "KMC26-013", name: "セキュリティインテリジェンスと心理・倫理・法", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "1", semester: "前期" },
    { id: "KMC26-014", name: "情報セキュリティマネジメントとガバナンス", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "2", semester: "後期" },
    { id: "KMC26-015", name: "セキュアシステム設計・開発", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "情報システム", year: "1,2", semester: "前期／後期", notes: "集中講義" },
    { id: "KMC26-016", name: "サイバーディフェンス実践演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "情報システム", year: "1,2", semester: "前期", notes: "集中講義" },
    { id: "KMC26-017", name: "データサイエンス特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "2", semester: "後期" },
    { id: "KMC26-018", name: "知能情報学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報システム", year: "1,2", semester: "前期／後期" },

    // ========================================
    // 情報処理系（選択）
    // ========================================
    { id: "KMC26-019", name: "パターン認識特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報処理", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-020", name: "言語メディア特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報処理", year: "1,2", semester: "前期／後期", teachingCode: "情報" },
    { id: "KMC26-021", name: "映像工学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報処理", year: "1", semester: "後期", teachingCode: "情報" },
    { id: "KMC26-022", name: "計算機アーキテクチャ・高性能計算特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報処理", year: "2", semester: "前期" },
    { id: "KMC26-023", name: "音声処理特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "情報処理", year: "1,2", semester: "前期／後期" },

    // ========================================
    // 通信システム系（選択）
    // ========================================
    { id: "KMC26-024", name: "ディジタル通信特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "1", semester: "後期", teachingCode: "情報" },
    { id: "KMC26-025", name: "サイバネティクス特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "2", semester: "前期" },
    { id: "KMC26-026", name: "通信ネットワーク方式特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-027", name: "デジタル放送特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "1", semester: "後期", teachingCode: "情報" },
    { id: "KMC26-028", name: "光通信工学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-029", name: "ネットワークロボティクス特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "2", semester: "前期" },
    { id: "KMC26-030", name: "電波情報工学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "2", semester: "後期" },
    { id: "KMC26-031", name: "無線工学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "2", semester: "前期" },
    { id: "KMC26-032", name: "電波伝搬解析特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "1", semester: "前期" },
    { id: "KMC26-033", name: "海外サイエンス・プログラム", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "1,2", semester: "前期／後期", notes: "集中、海外英語短期研修" },

    // ========================================
    // 研究者教養科目
    // ========================================
    { id: "KMC26-034", name: "アカデミック・プレゼンテーション", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "研究者教養科目", year: "1,2", semester: "前期／後期", notes: "四半期(前/後)" },
    { id: "KMC26-035", name: "アカデミック・ライティング", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "研究者教養科目", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-036", name: "研究者倫理", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "研究者教養科目", year: "1,2", semester: "前期／後期", notes: "四半期(前/後)、オープン科目" },
    { id: "KMC26-037", name: "科学技術社会論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "研究者教養科目", year: "1,2", semester: "前期／後期", notes: "四半期(前/後)、オープン科目" },
    { id: "KMC26-038", name: "総合技術特別講義", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "研究者教養科目", year: "1,2", semester: "通年" },
    { id: "KMC26-040", name: "技術経営学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "研究者教養科目", year: "1", semester: "前期", notes: "集中講義" },

    // ========================================
    // バイオメディカル系
    // ========================================
    { id: "KMC26-041", name: "バイオメディカル・グローバリゼーション・エンジニアリング特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "バイオメディカル", year: "1", semester: "前期", notes: "集中" },

    // ========================================
    // 情報通信研究技術特論
    // ========================================
    { id: "KMC26-042", name: "情報通信研究技術特論A", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "情報通信研究技術", year: "1", semester: "前期" },
    { id: "KMC26-043", name: "情報通信研究技術特論B", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "情報通信研究技術", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-044", name: "情報通信研究技術特論C", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "情報通信研究技術", year: "1", semester: "前期" },
    { id: "KMC26-045", name: "情報通信研究技術特論D", credits: 1, category: "専門教育科目", classification: "選択", subcategory1: "情報通信研究技術", year: "1,2", semester: "前期／後期" },

    // ========================================
    // その他（選択）
    // ========================================
    { id: "KMC26-046", name: "半導体デバイス特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "2", semester: "後期" },
    { id: "KMC26-047", name: "知能ロボティクス特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "2", semester: "前期" },
    { id: "KMC26-048", name: "医用電子計測特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-049", name: "学習システム特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-050", name: "光応用工学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "2", semester: "後期" },
    { id: "KMC26-051", name: "並列システム解析特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "2", semester: "前期" },
    { id: "KMC26-052", name: "電気電子システム制御特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "1,2", semester: "前期／後期" },
    { id: "KMC26-053", name: "数理物理学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "2", semester: "前期" },

    // ========================================
    // インターンシップ
    // ========================================
    { id: "KMC26-054", name: "インターンシップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他", year: "1,2", semester: "前期／後期", notes: "集中" },

    // ========================================
    // 情報ネットワーク工学特論
    // ========================================
    { id: "KMC26-055", name: "情報ネットワーク工学特論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "通信システム", year: "1", semester: "後期", teachingCode: "情報" },
  ],

  promotionRequirements: [
    {
      label: "修了",
      targetYear: 2,
      items: [
        { label: "必修科目", requiredCredits: 13, filter: { classification: "必修" } },
        { label: "研究者教養科目", requiredCredits: 4, filter: { subcategory1: "研究者教養科目" } },
        { label: "合計（自由科目除く）", requiredCredits: 30, filter: {} },
      ],
    },
  ],

  creditLimits: [
    { label: "学期あたり上限", maxCredits: 99 },
  ],
};
