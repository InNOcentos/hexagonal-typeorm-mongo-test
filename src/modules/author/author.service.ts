import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { classToPlain, plainToClass, plainToInstance } from 'class-transformer';
import { AuthorEntity } from 'src/domains/entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorMapper } from './author.mapper';
import { Author } from './author.orm-entity';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) {}

  async create(createAuthorDto: CreateAuthorDto) {
    const data = plainToClass(AuthorEntity, createAuthorDto);
    const id = await this.authorRepository.save(AuthorMapper.mapToOrmEntity(data));
  }
}
