import { Controller, Get, Query } from '@nestjs/common';
import { LofiApiService } from './lofi-api.service';

@Controller('lofi-api')
export class LofiApiController {
  constructor(private readonly lofiApiService: LofiApiService) {}

  @Get('song')
  async getSong(@Query() songId: string): Promise<any> {
    const song = await this.lofiApiService.getSong(songId);
    return song;
  }
}
