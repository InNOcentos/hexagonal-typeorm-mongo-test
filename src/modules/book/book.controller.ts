import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import { BookEntity } from 'src/domains/entities/book.entity';
import { CreateBookUseCase, CreateBookUseCaseSymbol } from 'src/domains/ports/in/book/create-book.use-case';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(@Inject(CreateBookUseCaseSymbol) private readonly _createBookService: CreateBookUseCase) {}

  @Post()
  create(@Body(new ValidationPipe()) createBookDto: CreateBookDto) {
    const bookEntity = new BookEntity(createBookDto.name, createBookDto.authors);
    const result = this._createBookService.createBook(bookEntity);
    return result;
  }
}
