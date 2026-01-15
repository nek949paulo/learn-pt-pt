
export type Category = 
  | 'Greetings' 
  | 'Introductions' 
  | 'Essentials' 
  | 'Numbers' 
  | 'Weekdays' 
  | 'Directions' 
  | 'Restaurant' 
  | 'Emergency';

export interface Phrase {
  id: string;
  en: string;
  pt: string;
  pronunciation: string;
  examplePt: string;
  exampleEn: string;
  category: Category;
}

export interface UserProgress {
  learnedIds: string[];
  favoriteIds: string[];
  quizScores: { category: string; score: number; total: number; date: number }[];
  streak: number;
  lastStudyDate: number | null;
  experiencePoints: number;
}

export enum AppTab {
  Home = 'home',
  Flashcards = 'flashcards',
  Phrases = 'phrases',
  Quiz = 'quiz',
  Progress = 'progress'
}
