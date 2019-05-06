import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

// Column types for mysql / mariadb
//  bit, int, integer, tinyint, smallint, mediumint, bigint, 
//  float, double, double precision, dec, decimal, numeric, fixed, bool, boolean, 
//  date, datetime, timestamp, time, year, char, nchar, national char, 
//  varchar, nvarchar, national varchar, text, tinytext, mediumtext, 
//  blob, longtext, tinyblob, mediumblob, longblob, enum, json, binary, varbinary, 
//  geometry, point, linestring, polygon, multipoint, multilinestring, multipolygon, 
//  geometrycollection

@Entity('my_todos', { engine: 'InnoDB' })
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    ////@ManyToOne(type => User, user => user.id)
    @Column({ type: 'int', name: 'user_id', unsigned: true, default: 0 })
    userId: number;

    @Column('varchar', { length: 255 })
    title: string;

    @Column('text')
    content: string;

    @Column({ name: 'is_star', type: 'tinyint', unsigned: true, default: 0, comment: '是否星标' })
    isStar: boolean;

    @Column({ name: 'is_finish', type: 'tinyint', unsigned: true, default: 0, comment: '是否已完成' })
    isFinish: boolean;

    @Column({ name: 'create_time', type: 'int', unsigned: true, default: 0, comment: '添加时间' })
    createTime: number;

    @Column({ name: 'update_time', type: 'int', unsigned: true, default: 0, comment: '更新时间' })
    updateTime: number;
}