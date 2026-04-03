import type { DepartmentDefinition } from "@/types";
import { sampleDepartment } from "./sample-ec";

/** 利用可能な学科一覧 */
export const departments: DepartmentDefinition[] = [sampleDepartment];

export const getDepartment = (id: string): DepartmentDefinition | undefined =>
  departments.find((d) => d.id === id);
