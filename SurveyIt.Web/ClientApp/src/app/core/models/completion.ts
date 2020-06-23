import { Deserializable } from './deserializable';
import { User } from './user';
import { Answer } from './answer';


export class Completion implements Deserializable {
    id: number;
    completionDate: Date;
    completingUserId: string;
    answers: Answer[];

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
