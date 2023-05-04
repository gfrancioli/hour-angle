import { Injectable } from '@nestjs/common';
import { AngleService } from './angles.service';

@Injectable()
export class AppService {
  constructor(private AngleService: AngleService) { }

  async getAngle(params: { hour: number, minute?: number }): Promise<number | string> {
    try {
      const doc = await this.AngleService.getOne({ hour: params.hour, minute: params.minute })
      if (doc) return doc.angle
      
      let hour = params.hour == 12 ? 0 : params.hour
      if (params.minute == 60) {
        params.minute = 0
        params.hour += 1
        if (hour > 12)
          hour = hour - 12
      }
      const angleHour = hour * 30 + params.minute / 2
      const minuteHour = params.minute * 6
      let angle = Math.abs(angleHour - minuteHour)
      angle = Math.floor(Math.min(angle, 360 - angle))
      
      await this.AngleService.create({
        angle: angle,
        hours: params.hour,
        minutes: params.minute,
        date: new Date()
      })
      
      return angle
    } catch (err) {
      console.log(err)
      return err
    }
  }
}
