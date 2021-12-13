import { IsArray, IsNotEmpty, IsSemVer, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  books: [] | string[];
}
