import { Deserializable } from './deserializable';
import { User } from './user';


export class Question implements Deserializable {
    id: number;
    text: string;
    type: number;
    spotInSequence: number;
    
    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}