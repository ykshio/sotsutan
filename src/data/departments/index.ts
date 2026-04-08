import type { DepartmentDefinition } from "@/types";
import { ec22 } from "./ec-22";
import { ec23 } from "./ec-23";
import { ec24 } from "./ec-24";
import { ec25 } from "./ec-25";
import { ec26 } from "./ec-26";
import { ef22 } from "./ef-22";
import { ef23 } from "./ef-23";
import { ef24 } from "./ef-24";
import { ef25 } from "./ef-25";
import { ef26 } from "./ef-26";
import { eh22 } from "./eh-22";
import { eh23 } from "./eh-23";
import { eh24 } from "./eh-24";
import { eh25 } from "./eh-25";
import { eh26 } from "./eh-26";
import { ej23 } from "./ej-23";
import { ej24 } from "./ej-24";
import { ej25 } from "./ej-25";
import { ej26 } from "./ej-26";
import { ek22 } from "./ek-22";
import { ek23 } from "./ek-23";
import { ek24 } from "./ek-24";
import { ek25 } from "./ek-25";
import { ek26 } from "./ek-26";
import { es22 } from "./es-22";
import { es23 } from "./es-23";
import { es24 } from "./es-24";
import { es25 } from "./es-25";
import { es26 } from "./es-26";
import { kmc26 } from "./kmc-26";

/** 利用可能な学科一覧 */
export const departments: DepartmentDefinition[] = [ec22, ec23, ec24, ec25, ec26, ef22, ef23, ef24, ef25, ef26, eh22, eh23, eh24, eh25, eh26, ej23, ej24, ej25, ej26, ek22, ek23, ek24, ek25, ek26, es22, es23, es24, es25, es26, kmc26];

export const getDepartment = (id: string): DepartmentDefinition | undefined =>
  departments.find((d) => d.id === id);
