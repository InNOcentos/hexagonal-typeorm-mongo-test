import { AuthorEntity, AuthorId } from 'src/domains/entities/author.entity';

export interface AuthorPort {
  create(author: AuthorEntity): Promise<any>;
  findById(id: AuthorId): Promise<AuthorEntity>;
}
