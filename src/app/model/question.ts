export interface Question {
  id?: string;
  title?: string;
  content?: string;
  code?: string;
  category?: string;
  difficulty?: string;
  answer?: string;
  revealAnswer?: boolean;
  tags?: string[];
  userId: string;
}
