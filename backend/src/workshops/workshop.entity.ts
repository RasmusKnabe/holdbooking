import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, Index, Check} from 'typeorm';
import { Booking } from '../bookings/booking.entity';

@Entity('workshops')
@Check('chk_workshops_capacity_positive', '"capacity" > 0')
@Check('chk_workshops_duration_positive', '"duration_min" > 0')
export class Workshop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true})
    description: string | null;

    @Column({ type: 'varchar', nullable: true })
    category: string | null;

    @Index('idx_workshops_starts_at')
    @Column({ name: 'starts_at', type: 'timestamptz' })
    startsAt: Date;

    @Column({ name: 'duration_min', type: 'int' })
    durationMin: number;

    @Column({ type: 'int' })
    capacity: number;

    @Column({ type: 'varchar', nullable: true })
    location: string | null;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;

    @OneToMany(() => Booking, (b) => b.workshop)
    bookings: Booking[];
}