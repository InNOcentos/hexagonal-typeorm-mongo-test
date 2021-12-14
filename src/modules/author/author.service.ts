import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity, AuthorId } from 'src/domains/entities/author.entity';
import { AuthorPort } from 'src/domains/ports/out/author/author.port';
import { Repository } from 'typeorm';
import { AuthorMapper } from './author.mapper';
import { Author } from './author.orm-entity';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorAdapterService implements AuthorPort {
  constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorRepository.save(AuthorMapper.mapToOrmEntity(createAuthorDto));
  }

  async findById(id: AuthorId): Promise<AuthorEntity> {
    const author = await this.authorRepository.findOne({ id });
    return AuthorMapper.mapToDomain(author);
  }
}
