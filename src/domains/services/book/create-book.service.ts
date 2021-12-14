import { BookEntity } from 'src/domains/entities/book.entity';
import { AuthorPort } from 'src/domains/ports/out/author/author.port';
import { BookPort } from 'src/domains/ports/out/book/book.port';
import { CreateBookUseCase } from '../../ports/in/book/create-book.use-case';

export class CreateBookService implements CreateBookUseCase {
  constructor(private readonly _bookPort: BookPort, private readonly _authorPort: AuthorPort) {}

  async createBook(book: BookEntity) {
    console.log('create Book');
    for (let id of book.authors) {
      const author = await this._authorPort.findById(id);
    }
    return Promise.resolve(1);
  }
}
