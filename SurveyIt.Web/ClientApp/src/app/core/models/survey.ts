import { Deserializable } from './deserializable';
import { User } from './user';
import { Question } from './question';
import { Completion } from './completion';


export class Survey implements Deserializable {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    creatorId: number;
    questions: Question[];
    completions: Completion[];


    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
