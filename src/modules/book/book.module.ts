import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { Book } from './book.orm-entity';
import { BookAdapterService } from './book-adapter.service';
import { Publisher } from './publisher.orm-entity';
import { CreateBookUseCaseSymbol } from 'src/domains/ports/in/book/create-book.use-case';
import { CreateBookService } from 'src/domains/services/book/create-book.service';
import { AuthorAdapterService } from '../author/author.service';
import { Author } from '../author/author.orm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Publisher, Author])],
  controllers: [BookController],
  providers: [
    BookAdapterService,
    AuthorAdapterService,
    {
      provide: CreateBookUseCaseSymbol,
      useFactory: (bookAdapterService: BookAdapterService, authorAdapterService: AuthorAdapterService) => {
        return new CreateBookService(bookAdapterService, authorAdapterService);
      },
      inject: [BookAdapterService, AuthorAdapterService],
    },
  ],
})
export class BookModule {}
