import { Column, Entity, ObjectID, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.orm-entity';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books: Book[];
}
