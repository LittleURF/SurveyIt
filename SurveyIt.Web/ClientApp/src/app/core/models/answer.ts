import { Deserializable } from './deserializable';
import { User } from './user';


export class Answer implements Deserializable {

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}