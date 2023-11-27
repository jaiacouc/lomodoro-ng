import { Injectable } from '@nestjs/common';

@Injectable()
export class LofiApiService {
  public async getSong(songId: string): Promise<any> {
    // Access S3 bucket and retrieve song file.
    // Retrieve metadata from DynamoDB
  }
}
