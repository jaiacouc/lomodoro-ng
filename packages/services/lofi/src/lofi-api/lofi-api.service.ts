import { Injectable } from '@nestjs/common';
import { SongUploadParams } from '../shared/song-upload';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import {
  GetObjectCommand,
  GetObjectCommandInput,
  GetObjectCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';
import { AppFactory } from 'src/App-Factory/app-factory';

@Injectable()
export class LofiApiService {
  private _ddbTableName: string = '';
  private _s3BucketName: string = '';
  private ddbClient: DynamoDBClient = new DynamoDBClient({});
  private ddbDocClient: DynamoDBDocumentClient = DynamoDBDocumentClient.from(
    this.ddbClient,
  );
  private s3Client: S3Client = new S3Client({});

  constructor(appFactory: AppFactory) {
    this._ddbTableName = appFactory.getDDBTableName();
    this._s3BucketName = appFactory.getS3BucketName();
  }

  public async getSong(songId: string): Promise<any> {
    // Access S3 bucket and retrieve song file.
    // Retrieve metadata from DynamoDB

    const getCommandInput: GetCommandInput = {
      TableName: this._ddbTableName,
      Key: {
        SongId: songId,
      },
    };
    const getCommand: GetCommand = new GetCommand(getCommandInput);
    const response: GetCommandOutput = await this.ddbDocClient.send(getCommand);
    // Do something to map the response

    const getObjectInput: GetObjectCommandInput = {
      Bucket: this._s3BucketName,
      Key: this.getSongFileName(songId),
    };
    const getObjectCommand: GetObjectCommand = new GetObjectCommand(
      getObjectInput,
    );
    const s3Response: GetObjectCommandOutput =
      await this.s3Client.send(getObjectCommand);
    // Do something to map the response
  }

  public async addSong(params: SongUploadParams): Promise<any> {
    // Add the song file to the S3 bucket and any meta data to the database
  }

  private getSongFileName(songId: string): string {
    return 'lofi-song-' + songId;
  }
}
