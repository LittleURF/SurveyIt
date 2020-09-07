import { Survey } from '../models/survey';
import { Question } from '../models/question';

export class PostSurveyRequestBody {
  title: string;
  description: string;
  creatorId: string;
  questions: Question[];

  constructor(title: string, creatorId: string, questions: Question[], description: string = null){
    this.title = title;
    this.description = description;
    this.creatorId = creatorId;
    this.questions = questions;
  }
}
