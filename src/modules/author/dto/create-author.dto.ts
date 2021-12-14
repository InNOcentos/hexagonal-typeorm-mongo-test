import { IsArray, IsNotEmpty, IsSemVer, IsString } from 'class-validator';
import { Book } from 'src/modules/book/book.orm-entity';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  books: Book[];
}
