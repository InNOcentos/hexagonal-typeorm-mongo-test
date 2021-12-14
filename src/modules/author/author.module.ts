import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBookUseCaseSymbol } from 'src/domains/ports/in/book/create-book.use-case';
import { CreateBookService } from 'src/domains/services/book/create-book.service';
import { AuthorController } from './author.controller';
import { Author } from './author.orm-entity';
import { AuthorAdapterService } from './author.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorAdapterService],
})
export class AuthorModule {}
