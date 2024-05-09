export class AppFactory {
  private readonly _s3BucketName: string = '';
  private readonly _ddbTableName: string = '';

  constructor() {
    const processEnv: NodeJS.ProcessEnv = process.env;

    this._s3BucketName = processEnv.S3BUCKETNAME;
    this._ddbTableName = processEnv.DDBTABLENAME;
  }

  public getS3BucketName(): string {
    return this._s3BucketName;
  }

  public getDDBTableName(): string {
    return this._ddbTableName;
  }
}
