import type { UserData } from "@/types";

const STORAGE_KEY = "sotsutan-data";

export const loadUserData = (): UserData | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserData;
  } catch {
    return null;
  }
};

export const saveUserData = (data: UserData): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const clearUserData = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const createInitialUserData = (departmentId: string): UserData => ({
  departmentId,
  semesters: [],
  rankings: {},
});
