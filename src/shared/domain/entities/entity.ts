import { randomUUID as uuid } from 'node:crypto';

export abstract class Entity<Props> {
  public readonly _id: string;
  public readonly props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = id ?? uuid();
  }

  get id(): string {
    return this._id;
  }

  toJSON(): { id: string } & Props {
    return {
      id: this._id,
      ...this.props,
    };
  }
}