import { AuthorId } from './author.entity';

export type BookId = number;
export type BookName = string;

export class BookEntity {
  constructor(private readonly _name: BookName, private readonly _authors: AuthorId[], private readonly _id?: BookId) {}

  get name(): BookName {
    return this._name;
  }

  get authors(): AuthorId[] {
    return this._authors;
  }

  get id(): BookId {
    return this._id;
  }
}
