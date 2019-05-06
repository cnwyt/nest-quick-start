import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('my_todo_list')
export class Todo {
  @PrimaryGeneratedColumn() 
  id: number;
  
  @Column({type:'int', name: 'user_id'}) 
  userId: number;

  @Column({ length: 255 })
  title: string;

  @Column('text') 
  description: string;

  @Column('int') 
  views: number;

  @Column({type:'int', name:'is_star'}) 
  isStar: boolean;

  @Column({type:'int', name: 'is_finish'}) 
  isFinish: boolean;
  
  @Column({type:'int', name: 'create_time'}) 
  createTime: number;  
  
  @Column({type:'int', name: 'update_time'}) 
  updateTime: number;
}