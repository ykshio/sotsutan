import type { DepartmentDefinition } from "@/types";
import { ec22 } from "./ec-22";
import { ec26 } from "./ec-26";
import { eh26 } from "./eh-26";

/** 利用可能な学科一覧 */
export const departments: DepartmentDefinition[] = [ec26, eh26, ec22];

export const getDepartment = (id: string): DepartmentDefinition | undefined =>
  departments.find((d) => d.id === id);
