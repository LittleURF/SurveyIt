import { Deserializable } from './deserializable';
import { User } from './user';
import { QuestionType } from '../enums/question-type';


export class Question implements Deserializable {
    id: number;
    text: string;
    type: QuestionType;
    spotInSequence: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
