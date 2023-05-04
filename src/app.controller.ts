import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/rest/clock/:hour/:minute?')
  async execute(@Param('hour', new ParseIntPipe()) hour: number, @Param('minute') minute?: number): Promise<any> {
    if (!minute) minute = 0
    minute = typeof (minute) == 'string'? parseInt(minute): minute
    const angle = await this.appService.getAngle({ hour, minute });
    if (typeof angle === 'string') return {message: angle}
    return { angle }
  }
}
