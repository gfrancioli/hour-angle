import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AnglesRepository } from 'src/repositories/angles.repositories';

@Injectable()
export class AngleService {
    constructor(private angleRepository: AnglesRepository) { }

    async create(data: Prisma.AnglesCreateInput) {
        try {
            await this.angleRepository.createAngles(data);
        } catch (error) {
            console.log(error)
            throw new HttpException('Error inserting angle', HttpStatus.BAD_REQUEST);
        }
    }

    async getOne(data: { hour: number, minute: number }) {
        return await this.angleRepository.getOne(data);
    }
}