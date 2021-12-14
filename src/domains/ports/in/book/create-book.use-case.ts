import { BookEntity } from 'src/domains/entities/book.entity';

export const CreateBookUseCaseSymbol = Symbol('CreateBookUseCase');

export interface CreateBookUseCase {
  createBook(book: BookEntity): Promise<any>;
}
