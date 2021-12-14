import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.orm-entity';
import { Publisher } from './publisher.orm-entity';

@Injectable()
export class BookAdapterService {
  constructor(
    @InjectRepository(Book) private authorRepository: Repository<Book>,
    @InjectRepository(Publisher)
    private publisherRepository: Repository<Publisher>
  ) {}

  create() {
    return Promise.resolve('1');
  }
}
