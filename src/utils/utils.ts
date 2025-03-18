// src/utils.ts
export const generateId = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "-");
