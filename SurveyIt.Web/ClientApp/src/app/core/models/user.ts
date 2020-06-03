import { Deserializable } from './deserializable';
import { Completion } from './completion';

export class User implements Deserializable {
    id: number;
    creationDate: Date;
    completions: Completion[];

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}