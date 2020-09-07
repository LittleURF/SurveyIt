import { Answer } from '../models/answer';


export class PostCompletionRequestBody {
    surveyId: number;
    completingUserId: string;
    answers: Answer[];
}
