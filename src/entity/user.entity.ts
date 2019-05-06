import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Column types for mysql / mariadb
//  bit, int, integer, tinyint, smallint, mediumint, bigint, 
//  float, double, double precision, dec, decimal, numeric, fixed, bool, boolean, 
//  date, datetime, timestamp, time, year, char, nchar, national char, 
//  varchar, nvarchar, national varchar, text, tinytext, mediumtext, 
//  blob, longtext, tinyblob, mediumblob, longblob, enum, json, binary, varbinary, 
//  geometry, point, linestring, polygon, multipoint, multilinestring, multipolygon, 
//  geometrycollection

@Entity('my_users', { engine: 'InnoDB' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 100 })
    username: string;

    @Column('varchar', { length: 50 })
    nickname: string;

    @Column('varchar', { length: 200 })
    password: string;

    @Column('varchar', { length: 150 })
    email: string;

    @Column('varchar', { length: 255 })
    description: string;

    @Column('varchar', { length: 20 })
    mobile: string;

    @Column('varchar', { length: 255 })
    location: string;

    @Column({ name: 'is_admin', type: 'tinyint', unsigned: true, default: 0 })
    isAdmin: boolean;

    @Column({ name: 'create_time', type: 'int', unsigned: true, default: 0, comment: '添加时间' })
    createTime: number;

    @Column({ name: 'update_time', type: 'int', unsigned: true, default: 0, comment: '更新时间' })
    updateTime: number;
}