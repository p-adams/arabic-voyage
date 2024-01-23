export interface ArabicAlphabet {
  arabicChar: string;
  transliteration: string;
  letterName: string;
}

export const arabicAlphabet: ArabicAlphabet[] = [
  { arabicChar: "ا", transliteration: "alif", letterName: "ألف" },
  { arabicChar: "ب", transliteration: "ba", letterName: "باء" },
  { arabicChar: "ت", transliteration: "ta", letterName: "تاء" },
  { arabicChar: "ث", transliteration: "tha", letterName: "ثاء" },
  { arabicChar: "ج", transliteration: "jim", letterName: "جيم" },
  { arabicChar: "ح", transliteration: "ha", letterName: "حاء" },
  { arabicChar: "خ", transliteration: "kha", letterName: "خاء" },
  { arabicChar: "د", transliteration: "dal", letterName: "دال" },
  { arabicChar: "ذ", transliteration: "dhal", letterName: "ذال" },
  { arabicChar: "ر", transliteration: "ra", letterName: "راء" },
  { arabicChar: "ز", transliteration: "za", letterName: "زاي" },
  { arabicChar: "س", transliteration: "sin", letterName: "سين" },
  { arabicChar: "ش", transliteration: "shin", letterName: "شين" },
  { arabicChar: "ص", transliteration: "sad", letterName: "صاد" },
  { arabicChar: "ض", transliteration: "dad", letterName: "ضاد" },
  { arabicChar: "ط", transliteration: "taa", letterName: "طاء" },
  { arabicChar: "ظ", transliteration: "zaa", letterName: "ظاء" },
  { arabicChar: "ع", transliteration: "ain", letterName: "عين" },
  { arabicChar: "غ", transliteration: "ghain", letterName: "غين" },
  { arabicChar: "ف", transliteration: "fa", letterName: "فاء" },
  { arabicChar: "ق", transliteration: "qaf", letterName: "قاف" },
  { arabicChar: "ك", transliteration: "kaf", letterName: "كاف" },
  { arabicChar: "ل", transliteration: "lam", letterName: "لام" },
  { arabicChar: "م", transliteration: "mim", letterName: "ميم" },
  { arabicChar: "ن", transliteration: "nun", letterName: "نون" },
  { arabicChar: "ه", transliteration: "haa", letterName: "هاء" },
  { arabicChar: "و", transliteration: "waw", letterName: "واو" },
  { arabicChar: "ي", transliteration: "ya", letterName: "ياء" },
  { arabicChar: "ء", transliteration: "hamza", letterName: "همزة" },
];
