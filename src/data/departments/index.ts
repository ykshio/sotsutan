import type { DepartmentDefinition } from "@/types";
import { ec22 } from "./ec-22";

/** 利用可能な学科一覧 */
export const departments: DepartmentDefinition[] = [ec22];

export const getDepartment = (id: string): DepartmentDefinition | undefined =>
  departments.find((d) => d.id === id);
