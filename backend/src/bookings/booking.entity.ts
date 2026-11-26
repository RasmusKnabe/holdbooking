import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn, Index, Unique} from 'typeorm';
import { User } from '../users/user.entity';
import { Workshop } from '../workshops/workshop.entity';

@Entity('bookings')
@Unique('uq_bookings_user_workshop', ['user', 'workshop'])
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (u) => u.bookings, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Workshop, (w) => w.bookings, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'workshop_id' })
    @Index('idx_bookings_workshop_id')
    workshop: Workshop;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;

}