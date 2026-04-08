import type { DepartmentDefinition } from "@/types";

/**
 * 工学部 機械工学科（2023年度入学）
 * 自動生成: scripts/csv-to-ts.py
 */
export const ek23: DepartmentDefinition = {
  id: "ek-23",
  departmentCode: "EK",
  entranceYear: 2023,
  name: "機械工学科",
  faculty: "工学部",
  subjects: [
    { id: "EK23-001", name: "微分積分学および演習Ⅰ", credits: 4, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期／後期", notes: "初回の履修は、前期開講のクラスを履修すること" },
    { id: "EK23-002", name: "線形代数学Ⅰ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "数学", year: "1", semester: "前期／後期", notes: "初回の履修は、前期開講のクラスを履修すること" },

    { id: "EK23-003", name: "基礎物理学", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "後期は再履修クラスの開講" },
    { id: "EK23-004", name: "物理基礎および物理実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「化学基礎および化学実験」との隔週開講" },
    { id: "EK23-005", name: "化学基礎および化学実験", credits: 1, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期", notes: "週2コマ開講「物理基礎および物理実験」との隔週開講" },
    { id: "EK23-006", name: "物理学概論および演習A", credits: 2, category: "工学基礎科目", classification: "択一必修", subcategory1: "自然科学技術", year: "1", semester: "後期", notes: "択一必修（左記の科目からから2単位を修得すること）" },
    { id: "EK23-007", name: "物理学概論および演習B", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "後期" },
    { id: "EK23-008", name: "物理学概論および演習C", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "後期" },
    { id: "EK23-009", name: "科学技術概論A", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期" },
    { id: "EK23-010", name: "科学技術概論B", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期" },
    { id: "EK23-011", name: "科学技術概論C", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期" },
    { id: "EK23-012", name: "科学技術概論D", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "自然科学技術", year: "1", semester: "前期／後期" },

    { id: "EK23-013", name: "ワークショップ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "シ ョ ッ プ ワ ー ク", year: "1", semester: "前期" },

    { id: "EK23-014", name: "情報リテラシー（数理・データサイエンス入門）", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "前期", teachingCode: "基礎要件" },
    { id: "EK23-015", name: "コンピュータプログラミングⅠ", credits: 2, category: "工学基礎科目", classification: "必修", subcategory1: "情報", year: "1", semester: "後期", teachingCode: "基礎要件" },

    { id: "EK23-016", name: "微分積分学および演習Ⅱ", credits: 4, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "1", semester: "後期", teachingCode: "112解析" },
    { id: "EK23-017", name: "線形代数学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "1", semester: "後期", teachingCode: "110代数" },
    { id: "EK23-018", name: "微分方程式Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "2", semester: "前期", teachingCode: "112解析" },
    { id: "EK23-019", name: "微分方程式Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EK23-020", name: "ベクトルおよびテンソル", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EK23-021", name: "フーリエ解析", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EK23-022", name: "複素解析学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "2", semester: "後期", teachingCode: "112解析" },
    { id: "EK23-023", name: "複素解析学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "3", semester: "後期", teachingCode: "112解析" },
    { id: "EK23-024", name: "数値解析学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "3", semester: "後期", teachingCode: "112解析" },
    { id: "EK23-025", name: "確率・統計Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "2", semester: "後期", teachingCode: "113確統" },
    { id: "EK23-026", name: "確率・統計Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "数学科目", year: "3", semester: "前期", teachingCode: "113確統" },

    { id: "EK23-027", name: "工業力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "専門基礎科目", year: "1", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-028", name: "工業力学Ⅱおよび演習", credits: 3, category: "専門教育科目", classification: "選択", subcategory1: "専門基礎科目", year: "1", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-029", name: "ワークショップⅡ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "専門基礎科目", year: "1", semester: "後期" },

    { id: "EK23-030", name: "材料力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "材料系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-031", name: "材料力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "材料系科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-032", name: "材料工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "材料系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-033", name: "材料強度学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "材料系科目", year: "3", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-034", name: "弾塑性学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "材料系科目", year: "3", semester: "前期", teachingCode: "160工業" },

    { id: "EK23-035", name: "加工学基礎および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "加工系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-036", name: "機械加工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "加工系科目", year: "3", semester: "前期", teachingCode: "160工業" },

    { id: "EK23-037", name: "流体の力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "流体系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-038", name: "流体の力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "流体系科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-039", name: "粘性流体力学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "流体系科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-040", name: "流体機械", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "流体系科目", year: "3", semester: "後期", teachingCode: "160工業" },

    { id: "EK23-041", name: "工業熱力学Ⅰおよび演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "熱系科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-042", name: "工業熱力学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "熱系科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-043", name: "伝熱工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "熱系科目", year: "3", semester: "前期", teachingCode: "160工業", notes: "2023年度は開講せず" },
    { id: "EK23-044", name: "熱機関", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "熱系科目", year: "3", semester: "前期", teachingCode: "160工業" },

    { id: "EK23-045", name: "メカトロニクス概論", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "振動制御科目", year: "1", semester: "後期", teachingCode: "131情②" },
    { id: "EK23-046", name: "振動学および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "振動制御科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-047", name: "応用振動学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "振動制御科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-048", name: "制御工学Ⅰ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "振動制御科目", year: "3", semester: "前期", teachingCode: "131情②" },
    { id: "EK23-049", name: "制御工学Ⅱ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "振動制御科目", year: "3", semester: "後期", teachingCode: "131情②" },
    { id: "EK23-050", name: "ロボット工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "振動制御科目", year: "3", semester: "後期", teachingCode: "132情③" },
    { id: "EK23-051", name: "計測工学", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "振動制御科目", year: "3", semester: "前期", teachingCode: "131情②" },

    { id: "EK23-052", name: "機械要素設計および演習", credits: 3, category: "専門教育科目", classification: "必修", subcategory1: "設計製図科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-053", name: "計算機援用設計", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "設計製図科目", year: "3", semester: "前期", teachingCode: "114コンピュ" },
    { id: "EK23-054", name: "機械設計製図Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "設計製図科目", year: "2", semester: "前期", teachingCode: "134情⑤" },
    { id: "EK23-055", name: "機械設計製図Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "設計製図科目", year: "2", semester: "後期", teachingCode: "132情③" },
    { id: "EK23-056", name: "機械設計製図Ⅲ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "設計製図科目", year: "3", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-057", name: "3D-CADワークショップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "設計製図科目", year: "3", semester: "後期" },

    { id: "EK23-058", name: "機械工学実験実習Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "実験実習科目", year: "2", semester: "前期", teachingCode: "160工業" },
    { id: "EK23-059", name: "機械工学実験実習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "実験実習科目", year: "2", semester: "後期", teachingCode: "160工業" },
    { id: "EK23-060", name: "機械工学総合演習Ⅰ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "実験実習科目", year: "3", semester: "前期", teachingCode: "160工業", notes: "実験・アセスメント科目" },

    { id: "EK23-061", name: "品質管理", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "その他科目", year: "4", semester: "後期" },
    { id: "EK23-062", name: "機械工学総合演習Ⅱ", credits: 2, category: "専門教育科目", classification: "必修", subcategory1: "その他科目", year: "3", semester: "後期", teachingCode: "160工業", notes: "輪講・アセスメント科目" },
    { id: "EK23-063", name: "インターンシップ", credits: 2, category: "専門教育科目", classification: "選択", subcategory1: "その他科目", year: "3", semester: "通年" },
    { id: "EK23-064", name: "卒業研究", credits: 6, category: "専門教育科目", classification: "必修", subcategory1: "その他科目", year: "4", semester: "通年" },

    { id: "EK23-065", name: "職業指導", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "3", semester: "前期", teachingCode: "161職指" },
    { id: "EK23-066", name: "コンピュータ基礎および演習Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "2", semester: "前期", teachingCode: "131情②" },
    { id: "EK23-067", name: "情報システムの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "2", semester: "後期", teachingCode: "132情③" },
    { id: "EK23-068", name: "情報通信ネットワークの基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "2", semester: "後期", teachingCode: "133情④" },
    { id: "EK23-069", name: "マルチメディア表現技術の基礎および演習", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "2", semester: "前期", teachingCode: "134情⑤" },
    { id: "EK23-070", name: "線形代数学Ⅲ", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "2", semester: "前期", teachingCode: "110代数" },
    { id: "EK23-071", name: "数式処理", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "2", semester: "前期", teachingCode: "114コンピュ" },
    { id: "EK23-072", name: "代数学入門", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "1", semester: "後期", teachingCode: "110代数" },
    { id: "EK23-073", name: "代数学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "2", semester: "後期", teachingCode: "110代数" },
    { id: "EK23-074", name: "解析学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "3", semester: "前期", teachingCode: "112解析" },
    { id: "EK23-075", name: "幾何学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "3", semester: "前期", teachingCode: "111幾何" },
    { id: "EK23-076", name: "微分幾何学", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "3", semester: "後期", teachingCode: "111幾何" },
    { id: "EK23-077", name: "工業技術概論", credits: 2, category: "専門教育科目", classification: "自由", subcategory1: "教職科目", year: "3", semester: "後期", teachingCode: "160工業" },
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
        { label: "工学基礎科目", requiredCredits: 18, filter: { category: "工学基礎科目" } },
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
