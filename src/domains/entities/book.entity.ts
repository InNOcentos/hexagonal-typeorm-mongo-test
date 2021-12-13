import { AuthorId } from "./author.entity"

export type BookId = number
export type BookName = string

export class BookEntity {
  constructor(
    private readonly _id: BookId,
    private readonly _name: BookName,
    private readonly _author: AuthorId
  ) {}

  get id(): BookId {
    return this._id
  }

  get name(): BookName {
    return this._name
  }

  get author(): AuthorId {
    return this._author
  }
}
