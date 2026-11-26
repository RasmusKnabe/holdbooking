import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workshop } from './workshop.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Workshop])],
})
export class WorkshopsModule {}
