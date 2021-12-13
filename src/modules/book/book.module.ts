import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { Book } from './book.orm-entity';
import { BookService } from './book.service';
import { Publisher } from './publisher.orm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Publisher])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
