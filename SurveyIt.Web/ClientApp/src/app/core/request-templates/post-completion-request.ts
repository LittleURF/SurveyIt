import { Answer } from '../models/answer';


export class PostCompletionRequest {
    surveyId: number;
    completingUserId: string;
    answers: Answer[];
}
