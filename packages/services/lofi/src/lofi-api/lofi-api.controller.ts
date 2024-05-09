import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { LofiApiService } from './lofi-api.service';
import { SongUploadParams } from '../shared/song-upload';

@Controller('lofi')
export class LofiApiController {
  constructor(private readonly lofiApiService: LofiApiService) {}

  @Get('song')
  async getSong(@Query() songId: string): Promise<any> {
    const song = await this.lofiApiService.getSong(songId);
    return song;
  }

  @Put('song')
  async addSong(@Body() songUpload: SongUploadParams): Promise<void> {
    await this.lofiApiService.addSong(songUpload);
  }
}
