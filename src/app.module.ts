import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { AngleService } from './services/angles.service';
import { AnglesRepository } from './repositories/angles.repositories';
import { PrismaConfig } from './config/prisma/prisma.client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AngleService, AnglesRepository, PrismaConfig],
})
export class AppModule { }
