import { Module } from '@nestjs/common';
import { LofiApiService } from './lofi-api.service';
import { LofiApiController } from './lofi-api.controller';

@Module({
  controllers: [LofiApiController],
  providers: [LofiApiService],
})
export class LofiApiModule {}
