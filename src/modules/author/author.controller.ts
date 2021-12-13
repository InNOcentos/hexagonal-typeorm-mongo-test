import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  create(@Body(new ValidationPipe()) createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }
}
