import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '../config/prisma/prisma.client';
import { Angles, Prisma } from '@prisma/client';

@Injectable()
export class AnglesRepository {
    constructor(private prisma: PrismaConfig) { }

    async getOne(data: {
        hour: number,
        minute: number
    }
    ): Promise<Angles | null> {
        return await this.prisma.angles.findFirst({
            where: { hours: (data.hour), minutes: data.minute }
        })
    }

    async createAngles(data: Prisma.AnglesCreateInput): Promise<Angles> {
        return await this.prisma.angles.create({
            data,
        });
    }
}