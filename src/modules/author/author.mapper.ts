import { classToPlain, plainToClass } from 'class-transformer';
import { AuthorEntity } from 'src/domains/entities/author.entity';
import { Author } from './author.orm-entity';
import { CreateAuthorDto } from './dto/create-author.dto';

export class AuthorMapper {
  static mapToOrmEntity(createAuthorDto: CreateAuthorDto) {
    const authorOrmEntity = new Author();
    console.log(authorOrmEntity);
    authorOrmEntity.name = createAuthorDto.name;
    authorOrmEntity.books = createAuthorDto.books;
    return authorOrmEntity;
  }
  static mapToDomain(author: Author) {
    return new AuthorEntity(author.name, author.books);
  }
}
