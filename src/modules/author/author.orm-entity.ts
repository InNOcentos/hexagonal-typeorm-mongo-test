import { Column, Entity, JoinTable, ManyToMany, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from '../book/book.orm-entity';

@Entity()
export class Author {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @ManyToMany(() => Book)
  @JoinTable()
  books: Book[];
}
