import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LofiApiModule } from './lofi-api/lofi-api.module';

@Module({
  imports: [LofiApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
