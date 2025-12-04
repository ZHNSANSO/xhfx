export interface Option {
  id: string;
  label: string; // "A", "B", "C", "D"
  content: string; // LaTeX supported text
}

export interface Question {
  id: number;
  content: string; // LaTeX supported text
  options: Option[];
  correctOptionId: string;
  explanation: string; // Detailed analysis with LaTeX
  difficulty?: number;
}

export type FilterType = 'all' | 'wrong' | 'favorites';

export interface AppState {
  answers: Record<number, string>; // questionId -> optionId
  favorites: number[]; // list of questionIds
  wrongIds: number[]; // list of questionIds answered incorrectly
}