import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/book/book.module';
import { AuthorModule } from './modules/author/author.module';
import { Author } from './modules/author/author.orm-entity';
import { Book } from './modules/book/book.orm-entity';
import { Publisher } from './modules/book/publisher.orm-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Author, Book, Publisher],
    }),
    BookModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
