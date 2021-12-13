import { classToPlain, plainToClass } from 'class-transformer';
import { AuthorEntity } from 'src/domains/entities/author.entity';
import { Author } from './author.orm-entity';
import { CreateAuthorDto } from './dto/create-author.dto';

export class AuthorMapper {
  static mapToOrmEntity(author: AuthorEntity) {
    const authorOrmEntity = new Author();
    authorOrmEntity.name = author.name;
    authorOrmEntity.books = author.books;
    return authorOrmEntity;
  }
}
