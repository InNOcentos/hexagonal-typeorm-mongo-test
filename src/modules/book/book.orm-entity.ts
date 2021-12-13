import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from '../author/author.orm-entity';
import { Publisher } from './publisher.orm-entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Publisher, (publisher) => publisher.books)
  publisher: Publisher;

  @ManyToOne(() => Author)
  @JoinTable()
  authors: Author[];
}
