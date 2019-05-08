import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('my_tags', { engine: 'InnoDB' })
export class Tags {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', name: 'user_id', unsigned: true, default: 0 })
    userId: number;

    @Column({name: 'tag_name', type: 'varchar', length: 50})
    tagName: string;

    @Column({ name: 'create_time', type: 'int', unsigned: true, default: 0, comment: '添加时间' })
    createTime: number;
}