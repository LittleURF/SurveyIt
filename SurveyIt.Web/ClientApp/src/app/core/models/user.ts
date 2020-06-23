import { Deserializable } from './deserializable';
import { Completion } from './completion';

export class User implements Deserializable {
    id: string;
    name: string;

    constructor(id: string, name: string){
      this.id = id;
      this.name = name;
    }

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
