import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthorAdapterService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorAdapterService) {}
}
