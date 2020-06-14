import { Deserializable } from './deserializable';
import { User } from './user';


export class Answer implements Deserializable {
  id: number;
  questionId: number;
  value: string;

  deserialize(input: any): this {
      return Object.assign(this, input);
    }
}
