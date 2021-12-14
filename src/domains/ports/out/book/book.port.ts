import { BookEntity } from 'src/domains/entities/book.entity';

export interface BookPort {
  create(book: BookEntity): Promise<string>;
}
