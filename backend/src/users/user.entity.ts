import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Booking } from '../bookings/booking.entity';

export enum UserRole {
  Admin = 'admin',
  Member = 'member',
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ name: 'password_hash', select: false})
    passwordHash: string;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.Member })
    role: UserRole;
    
    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;

    @OneToMany(() => Booking, (b) => b.user)
    bookings: Booking[];
}