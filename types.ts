
export interface QuestionSet {
  id: number;
  title: string;
  questions: string[];
  color: string;
}

export interface WheelState {
  isSpinning: boolean;
  rotation: number;
  resultIndex: number | null;
}
