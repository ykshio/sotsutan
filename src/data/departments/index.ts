import type { DepartmentDefinition } from "@/types";
import { ec22 } from "./ec-22";
import { ec26 } from "./ec-26";
import { eh26 } from "./eh-26";
import { ek26 } from "./ek-26";
import { ef26 } from "./ef-26";
import { es26 } from "./es-26";
import { kmc26 } from "./kmc-26";

/** 利用可能な学科一覧 */
export const departments: DepartmentDefinition[] = [ec26, eh26, ek26, ef26, es26, kmc26, ec22];

export const getDepartment = (id: string): DepartmentDefinition | undefined =>
  departments.find((d) => d.id === id);
