import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  name: string;
  @IsArray()
  authors: number[];
}
