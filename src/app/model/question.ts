import { Tag } from './tag';

export interface Question {
  title?: string;
  content?: string;
  code?: string;
  category?: string;
  difficulty?: string;
  answer?: string;
  revealAnswer?: boolean;
  tags?: Tag[];
}
