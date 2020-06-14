import { Deserializable } from './deserializable';
import { Completion } from './completion';

export class User implements Deserializable {
    id: number;
    name: string;
    creationDate: Date;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
