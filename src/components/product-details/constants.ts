export interface ColorOption {
  name: string;
  hex: string;
}

export const DEFAULT_COLORS: ColorOption[] = [
  { name: "Shadow Navy", hex: "#1e3a5f" },
  { name: "Army Green", hex: "#4a5d23" },
];

export const DEFAULT_SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export const DEFAULT_BADGE = "New Release";

export const MOBILE_BREAKPOINT = 768;

export const FALLBACK_IMAGE = "https://picsum.photos/600/600";
