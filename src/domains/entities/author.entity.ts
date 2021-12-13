import {Book} from "src/modules/book/book.orm-entity"
import {BookName} from "./book.entity"

export type AuthorId = number
export type AuthorName = string

export class AuthorEntity {
  constructor(
    private readonly _id: AuthorId,
    private readonly _name: AuthorName,
    private readonly _books: Book[]
  ) {}

  get id(): AuthorId {
    return this._id
  }

  get name(): AuthorName {
    return this._name
  }

  get books(): Book[] {
    return this._books
  }
}
